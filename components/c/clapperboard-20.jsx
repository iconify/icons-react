import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf3wb_zhv.css';
import '../../css/x/xbbrjje4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf3wb_zhv"/><path class="xbbrjje4i"/>`,
		"fallback": "energy-icons:clapperboard-20",
	});
}

export default Component;
