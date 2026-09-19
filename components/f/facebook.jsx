import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqrud2bhn.css';
import '../../css/u/u_h_b-bhb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wqrud2bhn"/><path class="u_h_b-bhb"/>`,
		"fallback": "devicon:facebook",
	});
}

export default Component;
