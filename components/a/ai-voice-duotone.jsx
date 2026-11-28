import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjim-cb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary yjim-cb4n"/>`,
		"fallback": "iconaut:ai-voice-duotone",
	});
}

export default Component;
