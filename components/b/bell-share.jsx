import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bocy6eb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bocy6eb0f"/>`,
		"fallback": "tabler:bell-share",
	});
}

export default Component;
