import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yra2nkbxn.css';
import '../../css/g/gtawmvbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yra2nkbxn"/><path class="gtawmvbqi"/></g>`,
		"fallback": "coolicons:horse-duocolor-round",
	});
}

export default Component;
