import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9mbmacac.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9mbmacac"/>`,
		"fallback": "wpf:group",
	});
}

export default Component;
