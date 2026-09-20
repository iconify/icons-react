import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eurm6x-rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eurm6x-rc"/>`,
		"fallback": "tabler:artboard-off",
	});
}

export default Component;
