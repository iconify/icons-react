import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls29xvmdp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ls29xvmdp"/>`,
		"fallback": "healthicons:circle-small-outline",
	});
}

export default Component;
