import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytob4ubxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytob4ubxt"/>`,
		"fallback": "sidekickicons:circle-dashed",
	});
}

export default Component;
