import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkm6zyj7x.css';
import '../../css/i/idjmobcht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkm6zyj7x"/><path class="idjmobcht"/>`,
		"fallback": "famicons:basket-sharp",
	});
}

export default Component;
