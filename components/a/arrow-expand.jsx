import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/farv-6boo.css';
import '../../css/e/eqvtu_rht.css';
import '../../css/o/orqmh4n-s.css';
import '../../css/d/dn65s6b8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="farv-6boo"/><path class="eqvtu_rht"/><path class="orqmh4n-s"/><path class="dn65s6b8u"/>`,
		"fallback": "ion:arrow-expand",
	});
}

export default Component;
