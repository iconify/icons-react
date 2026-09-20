import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-sbfr54f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-sbfr54f"/>`,
		"fallback": "tabler:chart-funnel",
	});
}

export default Component;
