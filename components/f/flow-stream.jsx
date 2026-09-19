import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuwikiitw.css';
import '../../css/f/f7t-e2bsi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuwikiitw"/><path class="f7t-e2bsi"/>`,
		"fallback": "carbon:flow-stream",
	});
}

export default Component;
