import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk67_kb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk67_kb6o"/>`,
		"fallback": "tdesign:cart",
	});
}

export default Component;
