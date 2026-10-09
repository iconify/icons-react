import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1kol59_x.css';
import '../../css/w/wk-mpkb0v.css';
import '../../css/k/kroofvbxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1kol59_x"/><path class="wk-mpkb0v"/><path class="kroofvbxd"/>`,
		"fallback": "energy-icons:building-alert-20",
	});
}

export default Component;
