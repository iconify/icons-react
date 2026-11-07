import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue3ui5iyp.css';
import '../../css/h/haz-fbj8x.css';
import '../../css/w/wryd348yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue3ui5iyp"/><path class="haz-fbj8x"/><path class="wryd348yz"/>`,
		"fallback": "solar:diskette-bold-duotone",
	});
}

export default Component;
