import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t18nv0b9w.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t18nv0b9w"/>`,
		"fallback": "fa-solid:balance-scale-left",
	});
}

export default Component;
