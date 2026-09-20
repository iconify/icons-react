import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbo2ulb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbo2ulb4j"/>`,
		"fallback": "tabler:brand-facebook-filled",
	});
}

export default Component;
