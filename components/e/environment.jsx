import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slfr786iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slfr786iu"/>`,
		"fallback": "mdi:environment",
	});
}

export default Component;
