import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwp9ffgow.css';
import '../../css/x/xgvknn2uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dwp9ffgow"/><path class="xgvknn2uq"/></g>`,
		"fallback": "vadivam:hand-coins",
	});
}

export default Component;
