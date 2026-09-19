import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r451cofrq.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r451cofrq"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:adobe-lightroom-outline",
	});
}

export default Component;
