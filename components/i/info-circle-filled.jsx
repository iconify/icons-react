import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el2cv0b9u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el2cv0b9u"/>`,
		"fallback": "ant-design:info-circle-filled",
	});
}

export default Component;
