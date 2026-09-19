import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-i_ebc_b.css';
import '../../css/b/bcbfgeb1t.css';
import '../../css/w/wfqye0b5u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g-i_ebc_b"/><path class="bcbfgeb1t"/><path class="wfqye0b5u"/></g>`,
		"fallback": "icon-park-outline:expenses-one",
	});
}

export default Component;
