import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfig_ccgd.css';
import '../../css/g/gywkiybpr.css';
import '../../css/n/ncqivtbyh.css';

const viewBox = {"width":3200,"height":3200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfig_ccgd"/><path class="gywkiybpr"/><path class="ncqivtbyh"/>`,
		"fallback": "material-icon-theme:folder-seeders-open",
	});
}

export default Component;
