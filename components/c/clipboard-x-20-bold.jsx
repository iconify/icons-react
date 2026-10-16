import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6t120hgc.css';
import '../../css/z/z84soivbf.css';
import '../../css/n/n2mrg8b6m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6t120hgc"/><path class="z84soivbf"/><path class="n2mrg8b6m"/>`,
		"fallback": "energy-icons:clipboard-x-20-bold",
	});
}

export default Component;
