import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6jbekf4h.css';
import '../../css/x/xbzc92bph.css';
import '../../css/h/htn4j8b4r.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6jbekf4h"/><path class="xbzc92bph"/><path class="htn4j8b4r"/>`,
		"fallback": "flag:dz-4x3",
	});
}

export default Component;
