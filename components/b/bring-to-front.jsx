import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywxq2xbbl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywxq2xbbl"/>`,
		"fallback": "carbon:bring-to-front",
	});
}

export default Component;
