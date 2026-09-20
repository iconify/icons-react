import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up2j63u8p.css';
import '../../css/q/qu-z_obdl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up2j63u8p"/><path class="qu-z_obdl"/>`,
		"fallback": "material-icon-theme:folder-connection-open",
	});
}

export default Component;
