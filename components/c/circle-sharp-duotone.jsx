import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmpez3udl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmpez3udl"/>`,
		"fallback": "keyline-icons:circle-sharp-duotone",
	});
}

export default Component;
