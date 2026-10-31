import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm-dhjbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm-dhjbqi"/>`,
		"fallback": "coolicons:case-sensitive-fill-round",
	});
}

export default Component;
