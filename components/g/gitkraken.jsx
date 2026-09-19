import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8b6wcepg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8b6wcepg"/>`,
		"fallback": "fa7-brands:gitkraken",
	});
}

export default Component;
