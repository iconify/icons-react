import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjchk9hdu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjchk9hdu"/>`,
		"fallback": "ant-design:environment-filled",
	});
}

export default Component;
