import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajg0txb_k.css';
import '../../css/o/oy6spb5ml.css';
import '../../css/x/xqmak-b8c.css';
import '../../css/y/yp6oh7b-i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajg0txb_k"/><path class="oy6spb5ml"/><path class="xqmak-b8c"/><path class="yp6oh7b-i"/>`,
		"fallback": "energy-icons:contactless-20",
	});
}

export default Component;
