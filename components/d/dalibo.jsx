import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqho8nb-e.css';
import '../../css/g/gk3tywx1l.css';
import '../../css/h/hnviy2tvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqho8nb-e"/><path class="gk3tywx1l"/><path class="hnviy2tvz"/>`,
		"fallback": "selfhst:dalibo",
	});
}

export default Component;
