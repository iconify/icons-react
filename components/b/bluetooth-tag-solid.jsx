import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2skgx_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="km2skgx_w"/>`,
		"fallback": "iconoir:bluetooth-tag-solid",
	});
}

export default Component;
