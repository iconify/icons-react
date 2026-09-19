import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goohnvfrd.css';
import '../../css/z/z8ck8jbnx.css';
import '../../css/e/eo7yq6b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goohnvfrd"/><path class="z8ck8jbnx"/><path class="eo7yq6b7f"/>`,
		"fallback": "flat-color-icons:document",
	});
}

export default Component;
