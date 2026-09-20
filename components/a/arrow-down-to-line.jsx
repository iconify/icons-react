import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez78vac_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez78vac_a"/>`,
		"fallback": "lucide:arrow-down-to-line",
	});
}

export default Component;
