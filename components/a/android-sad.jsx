import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo_qwjrtd.css';
import '../../css/a/ad6uu_b7l.css';
import '../../css/z/zp0o_6cpw.css';
import '../../css/d/dj5hahi0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo_qwjrtd"/><path class="ad6uu_b7l"/><path class="zp0o_6cpw"/><path class="dj5hahi0o"/>`,
		"fallback": "ion:android-sad",
	});
}

export default Component;
