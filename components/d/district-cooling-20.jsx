import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svs32pbol.css';
import '../../css/w/wsv6h_otb.css';
import '../../css/n/neih8ubcu.css';
import '../../css/w/w6fbvubyr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svs32pbol"/><path class="wsv6h_otb"/><path class="neih8ubcu"/><path class="w6fbvubyr"/>`,
		"fallback": "energy-icons:district-cooling-20",
	});
}

export default Component;
