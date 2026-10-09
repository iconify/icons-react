import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anpy_cbsi.css';
import '../../css/l/ljm5ww87o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anpy_cbsi"/><path class="ljm5ww87o"/>`,
		"fallback": "energy-icons:graduation-cap-20-bold",
	});
}

export default Component;
