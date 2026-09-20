import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0o1fpak.css';
import '../../css/b/btb5q7bii.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz0o1fpak"/><path class="btb5q7bii"/>`,
		"fallback": "streamline-pixel:building-real-eastate-houses-location",
	});
}

export default Component;
