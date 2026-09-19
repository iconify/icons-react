import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tabif8blg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tabif8blg"/>`,
		"fallback": "f7:goforward-45",
	});
}

export default Component;
