import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnfu69bkg.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnfu69bkg"/>`,
		"fallback": "fa-solid:grin-tongue",
	});
}

export default Component;
