import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whrwdskwh.css';
import '../../css/a/ao3d_1b-k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whrwdskwh"/><path class="ao3d_1b-k"/>`,
		"fallback": "energy-icons:dump-truck-20",
	});
}

export default Component;
