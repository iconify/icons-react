import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k65hgkb4u.css';
import '../../css/g/gsvz4o5yr.css';
import '../../css/l/lq7l02bvw.css';
import '../../css/d/d15wbrb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k65hgkb4u"/><path class="gsvz4o5yr"/><path class="lq7l02bvw"/><path class="d15wbrb2w"/></g>`,
		"fallback": "solar:chevrons-right-left-broken",
	});
}

export default Component;
