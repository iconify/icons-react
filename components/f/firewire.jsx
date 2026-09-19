import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk_cz7sof.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk_cz7sof"/>`,
		"fallback": "whh:firewire",
	});
}

export default Component;
