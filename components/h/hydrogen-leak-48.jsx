import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u43i3jb2i.css';
import '../../css/c/c9_dz4bmi.css';
import '../../css/m/m7e0bqrrb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u43i3jb2i"/><path class="c9_dz4bmi"/><path class="m7e0bqrrb"/>`,
		"fallback": "energy-icons:hydrogen-leak-48",
	});
}

export default Component;
