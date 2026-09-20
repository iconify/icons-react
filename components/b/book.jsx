import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqbx_ob3b.css';
import '../../css/u/uxebd5iiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqbx_ob3b"/><path class="uxebd5iiq"/>`,
		"fallback": "prime:book",
	});
}

export default Component;
