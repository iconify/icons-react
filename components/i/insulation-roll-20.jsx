import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpkg76b-y.css';
import '../../css/h/hbmkvs6fl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpkg76b-y"/><path class="hbmkvs6fl"/>`,
		"fallback": "energy-icons:insulation-roll-20",
	});
}

export default Component;
