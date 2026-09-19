import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mptj2mbio.css';
import '../../css/w/w2nbqq6me.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mptj2mbio"/><path class="w2nbqq6me"/>`,
		"fallback": "carbon:checkbox-undeterminate",
	});
}

export default Component;
