import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0wezz6ua.css';
import '../../css/g/gjg-bzb4d.css';
import '../../css/u/u36hnrvrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0wezz6ua"/><path class="gjg-bzb4d"/><path class="u36hnrvrx"/>`,
		"fallback": "solar:bill-check-bold-duotone",
	});
}

export default Component;
