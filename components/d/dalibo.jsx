import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqho8nb-e.css';
import '../../css/k/k7wugp4nh.css';
import '../../css/h/hnviy2tvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqho8nb-e"/><path class="k7wugp4nh"/><path class="hnviy2tvz"/>`,
		"fallback": "selfhst:dalibo",
	});
}

export default Component;
