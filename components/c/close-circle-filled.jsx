import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3w42fqxo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3w42fqxo"/>`,
		"fallback": "ant-design:close-circle-filled",
	});
}

export default Component;
