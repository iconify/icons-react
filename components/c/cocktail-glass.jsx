import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh0q_igbx.css';
import '../../css/n/nhdhqcbza.css';
import '../../css/a/aambbrbcu.css';
import '../../css/q/q0tp6zb7n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh0q_igbx"/><path class="nhdhqcbza"/><path class="aambbrbcu"/><path class="q0tp6zb7n"/>`,
		"fallback": "openmoji:cocktail-glass",
	});
}

export default Component;
