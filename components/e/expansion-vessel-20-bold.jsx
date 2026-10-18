import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkp57tl3g.css';
import '../../css/d/dhq72bbjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkp57tl3g"/><path class="dhq72bbjg"/>`,
		"fallback": "energy-icons:expansion-vessel-20-bold",
	});
}

export default Component;
