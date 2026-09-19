import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfxe2qbrn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfxe2qbrn"/>`,
		"fallback": "cib:btc",
	});
}

export default Component;
