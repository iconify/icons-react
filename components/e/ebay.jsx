import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibji53hgr.css';
import '../../css/h/htxinv2lu.css';
import '../../css/c/c3u1av0au.css';
import '../../css/e/e-m77qbec.css';

const viewBox = {"width":299.8,"height":120.125,"left":0.1,"top":0.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibji53hgr"/><path class="htxinv2lu"/><path class="c3u1av0au"/><path class="e-m77qbec"/>`,
		"fallback": "thesvg-color:ebay",
	});
}

export default Component;
