import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5fb9gbyc.css';
import '../../css/m/mpi65j14y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5fb9gbyc"/><path class="mpi65j14y"/>`,
		"fallback": "energy-icons:bold-20",
	});
}

export default Component;
