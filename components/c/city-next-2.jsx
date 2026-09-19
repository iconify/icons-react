import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq2xzablw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq2xzablw"/>`,
		"fallback": "fluent-mdl2:city-next-2",
	});
}

export default Component;
