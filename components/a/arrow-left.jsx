import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abx2bebyj.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abx2bebyj"/>`,
		"fallback": "ps:arrow-left",
	});
}

export default Component;
