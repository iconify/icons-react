import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmg-50b6b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmg-50b6b"/>`,
		"fallback": "f7:eye",
	});
}

export default Component;
