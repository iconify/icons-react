import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7mdh3bqy.css';
import '../../css/q/qvisowbeh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7mdh3bqy"/><path class="qvisowbeh"/>`,
		"fallback": "carbon:copy",
	});
}

export default Component;
