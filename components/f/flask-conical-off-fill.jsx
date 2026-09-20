import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qlfij9bif.css';
import '../../css/l/lt11x1blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qlfij9bif"/><path class="lt11x1blj"/></g>`,
		"fallback": "keyline-icons:flask-conical-off-fill",
	});
}

export default Component;
