import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn-gj8b2k.css';
import '../../css/e/e6okdcehl.css';
import '../../css/z/zplvpsp2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn-gj8b2k"/><path class="e6okdcehl"/><path class="zplvpsp2t"/>`,
		"fallback": "energy-icons:images-48",
	});
}

export default Component;
