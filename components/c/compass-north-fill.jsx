import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/muqydz-ab.css';
import '../../css/a/aun8ln3zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="muqydz-ab"/><path class="aun8ln3zw"/></g>`,
		"fallback": "lets-icons:compass-north-fill",
	});
}

export default Component;
