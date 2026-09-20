import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4qt0-s2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4qt0-s2d"/>`,
		"fallback": "selfhst:emby-light",
	});
}

export default Component;
