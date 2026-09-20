import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxpwfx6sa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxpwfx6sa"/>`,
		"fallback": "selfhst:hashicorp-vault-dark",
	});
}

export default Component;
