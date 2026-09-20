import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlhw53boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlhw53boa"/>`,
		"fallback": "tabler:adjustments-pin",
	});
}

export default Component;
