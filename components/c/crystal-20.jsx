import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juwx635fx.css';
import '../../css/y/yx8h1eeun.css';
import '../../css/y/yvxmkpbvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juwx635fx"/><path class="yx8h1eeun"/><path class="yvxmkpbvk"/>`,
		"fallback": "energy-icons:crystal-20",
	});
}

export default Component;
