import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvmpzpbvf.css';
import '../../css/v/vqmwm_bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvmpzpbvf"/><path class="vqmwm_bhv"/>`,
		"fallback": "octicon:eye-24",
	});
}

export default Component;
