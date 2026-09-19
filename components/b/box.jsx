import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t44iphbtl.css';
import '../../css/x/xq-7rxmzv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t44iphbtl"/><path class="xq-7rxmzv"/>`,
		"fallback": "carbon:box",
	});
}

export default Component;
