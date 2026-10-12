import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-uzhjbay.css';
import '../../css/e/e_4r487dh.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-uzhjbay"/><path class="e_4r487dh"/><path class="aqsnv9bnd"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`,
		"fallback": "energy-icons:image-x-20-bold",
	});
}

export default Component;
