import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7njcn22a.css';
import '../../css/m/mtulgmmtd.css';
import '../../css/z/zcdzjebcp.css';
import '../../css/j/jrz2xqc7b.css';
import '../../css/u/ueafoybns.css';
import '../../css/j/jixcgz__o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7njcn22a"/><path class="mtulgmmtd"/><path class="zcdzjebcp"/><path class="jrz2xqc7b"/><path class="ueafoybns"/><path class="jixcgz__o"/>`,
		"fallback": "solar:gift-bold",
	});
}

export default Component;
