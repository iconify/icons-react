import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m62_8ratf.css';
import '../../css/l/lrevnvbxs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m62_8ratf"/><path class="lrevnvbxs"/>`,
		"fallback": "energy-icons:battery-module-20",
	});
}

export default Component;
