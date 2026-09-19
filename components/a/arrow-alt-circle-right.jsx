import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehrol8p9b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehrol8p9b"/>`,
		"fallback": "fa7-solid:arrow-alt-circle-right",
	});
}

export default Component;
