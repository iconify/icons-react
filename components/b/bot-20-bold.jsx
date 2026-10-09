import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwqdcgbku.css';
import '../../css/o/oow25ab3t.css';
import '../../css/p/pc1ke3bbq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwqdcgbku"/><path class="oow25ab3t"/><path class="pc1ke3bbq"/>`,
		"fallback": "energy-icons:bot-20-bold",
	});
}

export default Component;
