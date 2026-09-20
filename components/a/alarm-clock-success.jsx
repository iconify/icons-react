import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuw0tqbjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yuw0tqbjw"/>`,
		"fallback": "ix:alarm-clock-success",
	});
}

export default Component;
