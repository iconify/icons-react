import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goohnvfrd.css';
import '../../css/z/z8ck8jbnx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goohnvfrd"/><path class="z8ck8jbnx"/>`,
		"fallback": "flat-color-icons:file",
	});
}

export default Component;
