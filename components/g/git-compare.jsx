import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdtk3xqjc.css';
import '../../css/m/mo5qvibyu.css';
import '../../css/f/fdbv05geg.css';
import '../../css/x/x783am7zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdtk3xqjc"/><path class="mo5qvibyu"/><path class="fdbv05geg"/><path class="x783am7zp"/></g>`,
		"fallback": "majesticons:git-compare",
	});
}

export default Component;
