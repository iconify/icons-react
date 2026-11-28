import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o777mrb5g.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o777mrb5g"/>`,
		"fallback": "pullo:caret-down-up-light",
	});
}

export default Component;
