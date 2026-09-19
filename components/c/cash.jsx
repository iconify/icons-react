import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jea2sgbeu.css';
import '../../css/t/ty_ptacek.css';
import '../../css/a/ac_65uciq.css';
import '../../css/k/k5t0n_cta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jea2sgbeu"/><path class="ty_ptacek"/><circle class="ac_65uciq"/><path class="k5t0n_cta"/>`,
		"fallback": "famicons:cash",
	});
}

export default Component;
