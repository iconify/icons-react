import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqc5dho9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqc5dho9i"/>`,
		"fallback": "selfhst:hashicorp-vault-light",
	});
}

export default Component;
