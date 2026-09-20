import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xku04_bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xku04_bup"/>`,
		"fallback": "keyline-icons:bitcoin-sharp-duotone",
	});
}

export default Component;
