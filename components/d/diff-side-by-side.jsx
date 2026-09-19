import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxgxo1bes.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxgxo1bes"/>`,
		"fallback": "fluent-mdl2:diff-side-by-side",
	});
}

export default Component;
