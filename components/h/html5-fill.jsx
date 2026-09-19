import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfy7vkm7h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfy7vkm7h"/>`,
		"fallback": "ant-design:html5-fill",
	});
}

export default Component;
