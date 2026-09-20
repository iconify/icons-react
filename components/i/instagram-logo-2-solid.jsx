import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzk1px2nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzk1px2nz"/>`,
		"fallback": "streamline-logos:instagram-logo-2-solid",
	});
}

export default Component;
