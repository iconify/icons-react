import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ial6mtbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ial6mtbhy"/>`,
		"fallback": "uit:angle-double-right",
	});
}

export default Component;
