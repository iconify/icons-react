import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/b/blbakrbtb.css';
import '../../css/e/ehvbn2_pk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="blbakrbtb"/><path class="ehvbn2_pk"/>`,
		"fallback": "energy-icons:arrow-circle-down-20",
	});
}

export default Component;
