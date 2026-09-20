import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfpq3ebrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfpq3ebrw"/>`,
		"fallback": "tabler:chart-arrows",
	});
}

export default Component;
