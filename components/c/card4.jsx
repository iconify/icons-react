import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ag-15qb5d.css';
import '../../css/o/o8zortoea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ag-15qb5d"/><path class="o8zortoea"/></g>`,
		"fallback": "reicon:card4",
	});
}

export default Component;
