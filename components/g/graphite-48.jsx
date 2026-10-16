import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfnqo82lz.css';
import '../../css/i/iuj2cybpw.css';
import '../../css/v/vdin1bcof.css';
import '../../css/u/uy7l63bvg.css';
import '../../css/g/gf1ijxbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfnqo82lz"/><path class="iuj2cybpw"/><path class="vdin1bcof"/><path class="uy7l63bvg"/><path class="gf1ijxbyw"/>`,
		"fallback": "energy-icons:graphite-48",
	});
}

export default Component;
