import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ux7eavv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t8ux7eavv"/>`,
		"fallback": "streamline-logos:adobe-xd-logo-solid",
	});
}

export default Component;
