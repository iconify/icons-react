import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itlombx0k.css';
import '../../css/c/cbxvuvbvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itlombx0k"/><path class="cbxvuvbvw"/>`,
		"fallback": "energy-icons:chart-sankey-20",
	});
}

export default Component;
