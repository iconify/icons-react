import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy31_s20a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy31_s20a"/>`,
		"fallback": "tdesign:accessibility-filled",
	});
}

export default Component;
