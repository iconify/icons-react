import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyjig5boc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyjig5boc"/>`,
		"fallback": "f7:arrow-down",
	});
}

export default Component;
