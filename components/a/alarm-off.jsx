import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq7e4ibxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yq7e4ibxm"/>`,
		"fallback": "reicon:alarm-off",
	});
}

export default Component;
