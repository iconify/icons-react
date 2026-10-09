import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0gbnw5mt.css';
import '../../css/n/nj8qf_mxd.css';
import '../../css/s/s8v6w-jez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0gbnw5mt"/><path class="nj8qf_mxd"/><path class="s8v6w-jez"/>`,
		"fallback": "energy-icons:chicken-leg-20",
	});
}

export default Component;
