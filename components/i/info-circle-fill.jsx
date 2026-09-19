import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkt0su85n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkt0su85n"/>`,
		"fallback": "f7:info-circle-fill",
	});
}

export default Component;
