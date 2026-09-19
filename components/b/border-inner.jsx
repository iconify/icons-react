import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqs0f2fsr.css';
import '../../css/u/uq4zqzbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqs0f2fsr"/><path class="uq4zqzbch"/>`,
		"fallback": "boxicons:border-inner",
	});
}

export default Component;
