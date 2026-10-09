import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_wx6iigs.css';
import '../../css/h/hh85jcb1u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_wx6iigs"/><path class="hh85jcb1u"/>`,
		"fallback": "energy-icons:city-skyline-20",
	});
}

export default Component;
