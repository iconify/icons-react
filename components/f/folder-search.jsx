import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-goe2b8t.css';
import '../../css/q/q-3yil6lr.css';
import '../../css/q/q05irhbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i-goe2b8t"/><path class="q-3yil6lr"/><path class="q05irhbrw"/></g>`,
		"fallback": "andrsrxn:folder-search",
	});
}

export default Component;
