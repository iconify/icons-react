import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_g719pny.css';
import '../../css/a/abx7eg41v.css';
import '../../css/x/x9j18ffun.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_g719pny"/><path class="abx7eg41v"/><path class="x9j18ffun"/>`,
		"fallback": "energy-icons:directions-20",
	});
}

export default Component;
