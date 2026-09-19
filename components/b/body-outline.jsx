import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt65pdnfo.css';
import '../../css/z/zj1ulpbog.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yt65pdnfo"/><path class="zj1ulpbog"/>`,
		"fallback": "ion:body-outline",
	});
}

export default Component;
