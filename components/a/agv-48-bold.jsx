import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikhyofbzz.css';
import '../../css/a/ay4i28ssf.css';
import '../../css/a/a6rc3ubbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikhyofbzz"/><path class="ay4i28ssf"/><path class="a6rc3ubbb"/>`,
		"fallback": "energy-icons:agv-48-bold",
	});
}

export default Component;
