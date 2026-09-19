import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti_mu752a.css';
import '../../css/o/ocqrknbja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti_mu752a"/><path class="ocqrknbja"/>`,
		"fallback": "flat-color-icons:cd-logo",
	});
}

export default Component;
