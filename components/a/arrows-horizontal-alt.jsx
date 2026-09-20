import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/fkvl2c.css';
import '../../css/k/k_e22n.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c fkvl2c"/><path class="a0m25c k_e22n"/>`,
		"fallback": "line-md:arrows-horizontal-alt",
	});
}

export default Component;
