import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jixfx1hdh.css';
import '../../css/r/ra1vsdwoa.css';
import '../../css/e/ep6j9gigt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jixfx1hdh"/><path class="ra1vsdwoa"/><path class="ep6j9gigt"/>`,
		"fallback": "energy-icons:flower-20",
	});
}

export default Component;
