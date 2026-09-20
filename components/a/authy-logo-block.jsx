import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojt3_9lvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojt3_9lvt"/>`,
		"fallback": "streamline-logos:authy-logo-block",
	});
}

export default Component;
