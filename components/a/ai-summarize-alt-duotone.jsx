import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi52opb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi52opb2j"/>`,
		"fallback": "si:ai-summarize-alt-duotone",
	});
}

export default Component;
