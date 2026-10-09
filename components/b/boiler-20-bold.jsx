import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elie8f57q.css';
import '../../css/o/ov2o_f2qf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elie8f57q"/><path class="ov2o_f2qf"/>`,
		"fallback": "energy-icons:boiler-20-bold",
	});
}

export default Component;
