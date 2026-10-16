import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbgn9e5js.css';
import '../../css/w/wtareoujg.css';
import '../../css/l/lehndqbef.css';
import '../../css/i/iq34384rn.css';
import '../../css/k/ke591hbbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbgn9e5js"/><path class="wtareoujg"/><path class="lehndqbef"/><path class="iq34384rn"/><path class="ke591hbbt"/>`,
		"fallback": "energy-icons:busbar-48-bold",
	});
}

export default Component;
