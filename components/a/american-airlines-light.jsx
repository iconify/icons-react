import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk7aafmee.css';
import '../../css/x/xtb6wpbmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk7aafmee"/><path class="xtb6wpbmv"/>`,
		"fallback": "selfhst:american-airlines-light",
	});
}

export default Component;
