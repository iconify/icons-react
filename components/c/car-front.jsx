import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl7c8kphf.css';
import '../../css/j/ja_pkqero.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl7c8kphf"/><path class="ja_pkqero"/>`,
		"fallback": "carbon:car-front",
	});
}

export default Component;
