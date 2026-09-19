import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/o/ob5x3zuiv.css';
import '../../css/b/bacrhyx6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="p-3d8dotc"/><path class="ob5x3zuiv"/><path clip-rule="evenodd" class="bacrhyx6o"/></g>`,
		"fallback": "icon-park-outline:adobe-indesign",
	});
}

export default Component;
