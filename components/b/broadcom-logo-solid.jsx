import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grcmtww9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grcmtww9l"/>`,
		"fallback": "streamline-logos:broadcom-logo-solid",
	});
}

export default Component;
