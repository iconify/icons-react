import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vipbm3bmb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vipbm3bmb"/>`,
		"fallback": "lsicon:hand-shake-outline",
	});
}

export default Component;
