import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp-z0dg_u.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp-z0dg_u"/>`,
		"fallback": "f7:archivebox-fill",
	});
}

export default Component;
