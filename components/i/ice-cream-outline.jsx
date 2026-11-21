import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bem5i2brp.css';
import '../../css/q/qjzeox4ix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bem5i2brp"/><path class="qjzeox4ix"/>`,
		"fallback": "ion:ice-cream-outline",
	});
}

export default Component;
