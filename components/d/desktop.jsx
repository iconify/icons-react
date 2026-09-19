import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2u7zvnem.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2u7zvnem"/>`,
		"fallback": "ant-design:desktop",
	});
}

export default Component;
