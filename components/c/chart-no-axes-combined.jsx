import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwpq41q1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwpq41q1t"/>`,
		"fallback": "lucide:chart-no-axes-combined",
	});
}

export default Component;
