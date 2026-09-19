import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1omp6b0t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1omp6b0t"/>`,
		"fallback": "fa6-solid:city",
	});
}

export default Component;
