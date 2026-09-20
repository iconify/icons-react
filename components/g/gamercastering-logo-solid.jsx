import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pog6wqrce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pog6wqrce"/>`,
		"fallback": "streamline-logos:gamercastering-logo-solid",
	});
}

export default Component;
