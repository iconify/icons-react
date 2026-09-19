import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktfxjxf_k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktfxjxf_k"/>`,
		"fallback": "ant-design:delete-column",
	});
}

export default Component;
