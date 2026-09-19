import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liy6tw56v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liy6tw56v"/>`,
		"fallback": "ant-design:facebook-filled",
	});
}

export default Component;
