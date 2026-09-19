import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kno4j37zf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kno4j37zf"/>`,
		"fallback": "ant-design:euro-circle-filled",
	});
}

export default Component;
