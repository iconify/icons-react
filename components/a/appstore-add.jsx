import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr60cyr2d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr60cyr2d"/>`,
		"fallback": "ant-design:appstore-add",
	});
}

export default Component;
