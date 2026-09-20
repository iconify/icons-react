import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lca7sdy8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lca7sdy8u"/>`,
		"fallback": "streamline-logos:cucumber-io-logo-solid",
	});
}

export default Component;
