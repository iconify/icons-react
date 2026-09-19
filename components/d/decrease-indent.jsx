import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1l7fccou.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1l7fccou"/>`,
		"fallback": "fluent-mdl2:decrease-indent",
	});
}

export default Component;
