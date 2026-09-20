import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9qkw_60r.css';
import '../../css/a/aqfsfgwjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9qkw_60r"/><path class="aqfsfgwjb"/>`,
		"fallback": "token:dps",
	});
}

export default Component;
