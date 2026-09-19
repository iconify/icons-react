import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9f6yvbrf.css';
import '../../css/v/vz0l4obzi.css';
import '../../css/j/jn9q8ebru.css';
import '../../css/e/e4d6ii9hp.css';
import '../../css/f/fajziooat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9f6yvbrf"/><path class="vz0l4obzi"/><circle class="jn9q8ebru"/><path class="e4d6ii9hp"/><path class="fajziooat"/>`,
		"fallback": "flat-color-icons:gallery",
	});
}

export default Component;
