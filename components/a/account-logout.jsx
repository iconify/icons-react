import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rak8y7bfa.css';
import '../../css/o/o3-o5nogz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rak8y7bfa"/><path class="o3-o5nogz"/>`,
		"fallback": "cil:account-logout",
	});
}

export default Component;
