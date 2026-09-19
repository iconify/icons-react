import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhv6agb1d.css';
import '../../css/o/oqcudtb8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhv6agb1d"/><path class="oqcudtb8r"/>`,
		"fallback": "carbon:asset",
	});
}

export default Component;
