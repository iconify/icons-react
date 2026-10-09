import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oppq-ug0u.css';
import '../../css/l/l-_13j-ie.css';
import '../../css/n/nr6pp78hl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oppq-ug0u"/><path class="l-_13j-ie"/><path class="nr6pp78hl"/>`,
		"fallback": "energy-icons:borehole-48-bold",
	});
}

export default Component;
