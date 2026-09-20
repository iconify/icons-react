import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wii_33l7g.css';
import '../../css/z/z05w6h9vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wii_33l7g"/><path class="z05w6h9vf"/>`,
		"fallback": "lineicons:dialogflow",
	});
}

export default Component;
