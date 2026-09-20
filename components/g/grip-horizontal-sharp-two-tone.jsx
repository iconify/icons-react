import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7smbpbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7smbpbll"/>`,
		"fallback": "keyline-icons:grip-horizontal-sharp-two-tone",
	});
}

export default Component;
