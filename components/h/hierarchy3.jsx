import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v1ws40mxs.css';
import '../../css/t/tijnm6bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v1ws40mxs"/><path class="tijnm6bib"/></g>`,
		"fallback": "reicon:hierarchy3",
	});
}

export default Component;
