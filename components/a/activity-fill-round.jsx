import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at93vc5gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at93vc5gb"/>`,
		"fallback": "coolicons:activity-fill-round",
	});
}

export default Component;
