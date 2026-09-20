import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtgv8-bzl.css';
import '../../css/v/v4bnoj-6z.css';
import '../../css/i/iturx2siu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtgv8-bzl"/><path class="v4bnoj-6z"/><path class="iturx2siu"/>`,
		"fallback": "uim:image-v",
	});
}

export default Component;
