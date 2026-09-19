import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/n/nnjcrobzw.css';
import '../../css/l/ln6f3q98l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="nnjcrobzw"/><path class="ln6f3q98l"/></g>`,
		"fallback": "icon-park-solid:gymnastics-one",
	});
}

export default Component;
