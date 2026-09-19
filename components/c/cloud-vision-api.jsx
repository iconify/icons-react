import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/da52qgv7e.css';
import '../../css/k/khjjc1bwg.css';
import '../../css/j/jv73pqbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><path class="da52qgv7e"/><path class="khjjc1bwg"/><circle class="jv73pqbxn"/>`,
		"fallback": "gcp:cloud-vision-api",
	});
}

export default Component;
