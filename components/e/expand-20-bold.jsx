import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mli097arj.css';
import '../../css/c/c9abqnf6w.css';
import '../../css/q/qzu82cbok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mli097arj"/><path class="c9abqnf6w"/><path class="qzu82cbok"/>`,
		"fallback": "energy-icons:expand-20-bold",
	});
}

export default Component;
