import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr94xlp5m.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr94xlp5m"/>`,
		"fallback": "fa-regular:grin-wink",
	});
}

export default Component;
