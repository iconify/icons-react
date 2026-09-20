import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djr3dcz0j.css';
import '../../css/z/zf5h5-ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djr3dcz0j"/><path class="zf5h5-ble"/>`,
		"fallback": "stash:creators-club-duotone",
	});
}

export default Component;
