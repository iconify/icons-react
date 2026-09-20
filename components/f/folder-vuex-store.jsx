import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufv-l2b0j.css';
import '../../css/n/nu_6q77ce.css';
import '../../css/n/nrcaqmbsk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufv-l2b0j"/><path class="nu_6q77ce"/><path class="nrcaqmbsk"/>`,
		"fallback": "material-icon-theme:folder-vuex-store",
	});
}

export default Component;
