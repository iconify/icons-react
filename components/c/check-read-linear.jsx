import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgmch9bzb.css';
import '../../css/g/gyvp6qb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lgmch9bzb"/><path class="gyvp6qb2o"/></g>`,
		"fallback": "solar:check-read-linear",
	});
}

export default Component;
