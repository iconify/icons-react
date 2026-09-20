import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4d9-5bmv.css';
import '../../css/m/mad6u8jan.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4d9-5bmv"/><path class="mad6u8jan"/>`,
		"fallback": "selfhst:american-airlines-dark",
	});
}

export default Component;
