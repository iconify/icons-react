import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd25lnj5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xd25lnj5c"/>`,
		"fallback": "qlementine-icons:github-24",
	});
}

export default Component;
