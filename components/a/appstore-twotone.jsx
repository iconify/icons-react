import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es1zkkb-o.css';
import '../../css/c/ca3j5lbpe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es1zkkb-o"/><path class="ca3j5lbpe"/>`,
		"fallback": "ant-design:appstore-twotone",
	});
}

export default Component;
