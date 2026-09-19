import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mssm-8b3t.css';
import '../../css/n/n5rw468eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mssm-8b3t"/><path class="n5rw468eb"/>`,
		"fallback": "boxicons:arrow-out-down-left-stroke-square",
	});
}

export default Component;
