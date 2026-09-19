import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9xb2qb7w.css';
import '../../css/g/gdngdpbdd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9xb2qb7w"/><path class="gdngdpbdd"/>`,
		"fallback": "devicon-plain:arduino",
	});
}

export default Component;
