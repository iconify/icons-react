import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9c9uwctg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9c9uwctg"/>`,
		"fallback": "streamline-logos:blogger-logo-solid",
	});
}

export default Component;
