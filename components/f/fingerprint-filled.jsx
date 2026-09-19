import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-a9cubfv.css';
import '../../css/b/bh3jo8buu.css';
import '../../css/b/bqx68zbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-a9cubfv"/><path class="bh3jo8buu"/><path class="bqx68zbbh"/>`,
		"fallback": "bitcoin-icons:fingerprint-filled",
	});
}

export default Component;
