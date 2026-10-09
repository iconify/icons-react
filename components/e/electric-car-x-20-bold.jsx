import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0ns9xbsl.css';
import '../../css/g/grio-8blz.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/n/nj9yfcx7y.css';
import '../../css/b/b325a1bje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0ns9xbsl"/><path class="grio-8blz"/><path class="aqsnv9bnd"/><path class="nj9yfcx7y"/><path class="b325a1bje"/>`,
		"fallback": "energy-icons:electric-car-x-20-bold",
	});
}

export default Component;
