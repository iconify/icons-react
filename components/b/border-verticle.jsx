import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh21mpa7z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh21mpa7z"/>`,
		"fallback": "ant-design:border-verticle",
	});
}

export default Component;
