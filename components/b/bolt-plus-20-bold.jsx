import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilu3h65we.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/r/r1fb64blm.css';
import '../../css/p/prfptqbhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilu3h65we"/><path class="aqsnv9bnd"/><path class="r1fb64blm"/><path class="prfptqbhf"/>`,
		"fallback": "energy-icons:bolt-plus-20-bold",
	});
}

export default Component;
