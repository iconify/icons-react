import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um_1f_zem.css';
import '../../css/t/txa3dwb5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um_1f_zem"/><path class="txa3dwb5p"/>`,
		"fallback": "energy-icons:extension-lead-48",
	});
}

export default Component;
