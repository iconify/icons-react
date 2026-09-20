import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gne2u-3fk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gne2u-3fk"/>`,
		"fallback": "selfhst:hashicorp-packer-light",
	});
}

export default Component;
