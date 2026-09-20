import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlmkxu4at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlmkxu4at"/>`,
		"fallback": "tabler:arrow-right-from-arc",
	});
}

export default Component;
