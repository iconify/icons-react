import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf4hk_mcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf4hk_mcr"/>`,
		"fallback": "nrk:arrow-uturn-left",
	});
}

export default Component;
