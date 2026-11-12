import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mekzb_ebz.css';
import '../../css/e/e8_gbpbab.css';
import '../../css/p/pvdz305lf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mekzb_ebz"/><path class="e8_gbpbab"/><path class="pvdz305lf"/>`,
		"fallback": "selfhst:dbackup-light",
	});
}

export default Component;
