import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/k/k-0agac5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="m4l-9ybuj"/><path class="k-0agac5w"/></g>`,
		"fallback": "lets-icons:dell",
	});
}

export default Component;
