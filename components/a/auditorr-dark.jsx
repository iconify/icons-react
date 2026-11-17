import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz_yk6bme.css';
import '../../css/e/eig7_3bqg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz_yk6bme"/><path class="eig7_3bqg"/>`,
		"fallback": "selfhst:auditorr-dark",
	});
}

export default Component;
