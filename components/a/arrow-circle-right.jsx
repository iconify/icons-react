import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afci7hbne.css';
import '../../css/g/g1m3d2bxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afci7hbne"/><path class="g1m3d2bxm"/>`,
		"fallback": "cil:arrow-circle-right",
	});
}

export default Component;
