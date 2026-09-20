import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxmat6dmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxmat6dmn"/>`,
		"fallback": "thesvg:hashicorp",
	});
}

export default Component;
