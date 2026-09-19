import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xty0e4bbv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xty0e4bbv"/>`,
		"fallback": "carbon:calls-incoming",
	});
}

export default Component;
