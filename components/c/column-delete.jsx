import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mwn8sscbi.css';
import '../../css/u/ufk3re2ji.css';
import '../../css/n/n4jxhabgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mwn8sscbi"/><path class="ufk3re2ji"/><path class="n4jxhabgi"/></g>`,
		"fallback": "hugeicons:column-delete",
	});
}

export default Component;
