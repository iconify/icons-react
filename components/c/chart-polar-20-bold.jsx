import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umayoyb1k.css';
import '../../css/o/ocq2nsbni.css';
import '../../css/z/zr0me355o.css';
import '../../css/b/besblbm2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umayoyb1k"/><path class="ocq2nsbni"/><path class="zr0me355o"/><path class="besblbm2p"/>`,
		"fallback": "energy-icons:chart-polar-20-bold",
	});
}

export default Component;
