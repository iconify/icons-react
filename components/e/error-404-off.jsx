import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eag81cn8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eag81cn8k"/>`,
		"fallback": "tabler:error-404-off",
	});
}

export default Component;
