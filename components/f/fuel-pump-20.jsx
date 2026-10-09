import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iixfqsbra.css';
import '../../css/u/upuxwyb9o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iixfqsbra"/><path class="upuxwyb9o"/>`,
		"fallback": "energy-icons:fuel-pump-20",
	});
}

export default Component;
