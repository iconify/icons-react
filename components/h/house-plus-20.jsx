import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/d/d1u5dmb3x.css';
import '../../css/m/m-x3x4itj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="d1u5dmb3x"/><path class="m-x3x4itj"/>`,
		"fallback": "energy-icons:house-plus-20",
	});
}

export default Component;
