import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3e2ddq-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3e2ddq-z"/>`,
		"fallback": "carbon:continuous-deployment",
	});
}

export default Component;
