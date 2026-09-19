import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/t/t6i1ncbto.css';
import '../../css/w/w9qq60bzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><path class="t6i1ncbto"/><path class="w9qq60bzj"/>`,
		"fallback": "flag:fi-1x1",
	});
}

export default Component;
