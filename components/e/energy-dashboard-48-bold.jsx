import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5x3dvjat.css';
import '../../css/h/htwye9bzz.css';
import '../../css/b/bo4ks1u_u.css';
import '../../css/c/c9s910gwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5x3dvjat"/><path class="htwye9bzz"/><path class="bo4ks1u_u"/><path class="c9s910gwp"/>`,
		"fallback": "energy-icons:energy-dashboard-48-bold",
	});
}

export default Component;
