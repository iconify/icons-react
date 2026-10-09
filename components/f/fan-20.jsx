import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apq2pw-va.css';
import '../../css/f/fjn5fnnqh.css';
import '../../css/x/xs7xk1ywk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apq2pw-va"/><path class="fjn5fnnqh"/><path class="xs7xk1ywk"/>`,
		"fallback": "energy-icons:fan-20",
	});
}

export default Component;
