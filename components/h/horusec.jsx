import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwg36gq5v.css';
import '../../css/y/ylqkw_bra.css';
import '../../css/o/oa840obqu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fwg36gq5v"><path class="ylqkw_bra"/><path class="oa840obqu"/></g>`,
		"fallback": "material-icon-theme:horusec",
	});
}

export default Component;
