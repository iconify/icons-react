import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbeqf47gu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbeqf47gu"/>`,
		"fallback": "icon-park-outline:chart-histogram-one",
	});
}

export default Component;
