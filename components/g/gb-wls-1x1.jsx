import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvdj2lb-t.css';
import '../../css/q/qndo5pb1f.css';
import '../../css/y/y03fyccpv.css';
import '../../css/x/x99bwxbol.css';
import '../../css/e/ebzc6hgzr.css';
import '../../css/c/c-46i37-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvdj2lb-t"/><path class="qndo5pb1f"/><g class="y03fyccpv"><path class="x99bwxbol"/><path class="ebzc6hgzr"/><path class="c-46i37-a"/></g>`,
		"fallback": "flag:gb-wls-1x1",
	});
}

export default Component;
