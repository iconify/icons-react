import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqf_2ftnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqf_2ftnx"/>`,
		"fallback": "tabler:arrows-right-left",
	});
}

export default Component;
