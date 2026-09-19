import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkba3m0qr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkba3m0qr"/>`,
		"fallback": "ant-design:gif",
	});
}

export default Component;
