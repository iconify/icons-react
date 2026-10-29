import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk_cstb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk_cstb7p"/>`,
		"fallback": "withicons:clock-solid",
	});
}

export default Component;
