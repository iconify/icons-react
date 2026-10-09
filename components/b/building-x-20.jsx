import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1kol59_x.css';
import '../../css/s/sk3pmyb5m.css';
import '../../css/h/h9o4a4caa.css';
import '../../css/k/kqbd9jytf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1kol59_x"/><path class="sk3pmyb5m"/><path class="h9o4a4caa"/><path class="kqbd9jytf"/>`,
		"fallback": "energy-icons:building-x-20",
	});
}

export default Component;
