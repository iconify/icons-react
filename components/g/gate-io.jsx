import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3d7yhb3u.css';
import '../../css/m/m9_h30bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3d7yhb3u"/><path class="m9_h30bse"/>`,
		"fallback": "token:gate-io",
	});
}

export default Component;
