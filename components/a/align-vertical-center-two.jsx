import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwp_z2i8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwp_z2i8h"/>`,
		"fallback": "icon-park-solid:align-vertical-center-two",
	});
}

export default Component;
