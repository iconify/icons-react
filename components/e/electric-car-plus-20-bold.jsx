import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0ns9xbsl.css';
import '../../css/g/grio-8blz.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/x/x4fp_zoyr.css';
import '../../css/p/prfptqbhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0ns9xbsl"/><path class="grio-8blz"/><path class="aqsnv9bnd"/><path class="x4fp_zoyr"/><path class="prfptqbhf"/>`,
		"fallback": "energy-icons:electric-car-plus-20-bold",
	});
}

export default Component;
