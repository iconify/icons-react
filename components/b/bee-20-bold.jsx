import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esurz2baj.css';
import '../../css/o/o42t0kkwq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esurz2baj"/><path class="o42t0kkwq"/>`,
		"fallback": "energy-icons:bee-20-bold",
	});
}

export default Component;
