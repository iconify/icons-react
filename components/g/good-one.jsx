import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3_vnw0km.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3_vnw0km"/>`,
		"fallback": "icon-park:good-one",
	});
}

export default Component;
