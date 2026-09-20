import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcye7x86p.css';
import '../../css/x/xwx0momul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcye7x86p"/><path class="xwx0momul"/>`,
		"fallback": "pixel:face-thinking",
	});
}

export default Component;
