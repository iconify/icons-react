import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/u89ec5bmm.css';
import '../../css/r/rfcep4bai.css';
import '../../css/z/zct1hfb-z.css';
import '../../css/i/irnqlskmr.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVnPZjeoO"><g class="ufeehvblu"><path class="u89ec5bmm"/><path class="rfcep4bai"/><path class="zct1hfb-z"/><path class="irnqlskmr"/></g></mask></defs><path mask="url(#SVGVnPZjeoO)" class="maw6_-12u"/>`,
		"fallback": "icon-park-solid:disk-one",
	});
}

export default Component;
