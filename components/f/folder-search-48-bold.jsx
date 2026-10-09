import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx3v-fbjr.css';
import '../../css/v/v3vwc3z2u.css';
import '../../css/z/zzhfcob3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx3v-fbjr"/><path class="v3vwc3z2u"/><path class="zzhfcob3h"/>`,
		"fallback": "energy-icons:folder-search-48-bold",
	});
}

export default Component;
