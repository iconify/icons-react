import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufl2bny3v.css';
import '../../css/e/eay9adclz.css';
import '../../css/t/tf2yhvbfm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufl2bny3v"/><path class="eay9adclz"/><path class="tf2yhvbfm"/>`,
		"fallback": "energy-icons:ballot-box-20-bold",
	});
}

export default Component;
