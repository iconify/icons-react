import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7p6popon.css';
import '../../css/u/uzzfsfvad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7p6popon"/><path class="uzzfsfvad"/>`,
		"fallback": "energy-icons:bell-20",
	});
}

export default Component;
