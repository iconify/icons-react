import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsmhpgwcs.css';
import '../../css/f/fh8g7ab6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsmhpgwcs"/><path class="fh8g7ab6d"/>`,
		"fallback": "energy-icons:code-block-48",
	});
}

export default Component;
