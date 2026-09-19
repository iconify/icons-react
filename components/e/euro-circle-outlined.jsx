import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx1mdubiz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx1mdubiz"/>`,
		"fallback": "ant-design:euro-circle-outlined",
	});
}

export default Component;
