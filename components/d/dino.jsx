import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln2z1rd5k.css';
import '../../css/o/osq-njbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln2z1rd5k"/><path class="osq-njbwy"/>`,
		"fallback": "boxicons:dino",
	});
}

export default Component;
