import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npnjj3bqi.css';
import '../../css/m/m31n_gbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npnjj3bqi"/><path class="m31n_gbkv"/>`,
		"fallback": "solar:circle-top-down-outline",
	});
}

export default Component;
