import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr66j6b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qr66j6b6j"/>`,
		"fallback": "griddy-icons:battery-vertical-full",
	});
}

export default Component;
