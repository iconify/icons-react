import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr5s_x-nn.css';
import '../../css/b/bqij9q-9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr5s_x-nn"/><path class="bqij9q-9y"/>`,
		"fallback": "cil:arrow-circle-left",
	});
}

export default Component;
