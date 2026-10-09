import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw2nm3b1a.css';
import '../../css/b/bib7mgb4o.css';
import '../../css/n/nidx4if6e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw2nm3b1a"/><path class="bib7mgb4o"/><path class="nidx4if6e"/>`,
		"fallback": "energy-icons:guitar-20",
	});
}

export default Component;
