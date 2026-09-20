import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewdzdgb_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewdzdgb_m"/>`,
		"fallback": "ix:folder-collapse-all",
	});
}

export default Component;
