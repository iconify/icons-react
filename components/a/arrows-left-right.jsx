import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiuiq63rg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiuiq63rg"/>`,
		"fallback": "fa6-solid:arrows-left-right",
	});
}

export default Component;
