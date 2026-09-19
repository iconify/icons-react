import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xs5ohebgj.css';
import '../../css/e/e1yrzbcyg.css';
import '../../css/m/me-qiub8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="xs5ohebgj"/><path class="e1yrzbcyg"/><path class="me-qiub8l"/></g>`,
		"fallback": "circle-flags:ia",
	});
}

export default Component;
