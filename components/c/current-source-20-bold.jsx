import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1aumdb7c.css';
import '../../css/k/kw01wubkh.css';
import '../../css/w/w0gkibbsu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1aumdb7c"/><path class="kw01wubkh"/><path class="w0gkibbsu"/>`,
		"fallback": "energy-icons:current-source-20-bold",
	});
}

export default Component;
