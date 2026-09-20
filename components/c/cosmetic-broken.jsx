import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qdafnbbjj.css';
import '../../css/d/d4vocib6k.css';
import '../../css/z/z37iwiaad.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/cu85-qw4a.css';
import '../../css/p/pmf__vb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qdafnbbjj"/><path class="d4vocib6k"/><path class="z37iwiaad"/><path class="c25lkgbgb"/><path class="cu85-qw4a"/><path class="pmf__vb6m"/></g>`,
		"fallback": "solar:cosmetic-broken",
	});
}

export default Component;
