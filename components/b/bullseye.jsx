import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v62_-3b9x.css';
import '../../css/n/nwfaqcbac.css';
import '../../css/e/ez0pggbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v62_-3b9x"/><path class="nwfaqcbac"/><path class="ez0pggbas"/>`,
		"fallback": "bx:bullseye",
	});
}

export default Component;
