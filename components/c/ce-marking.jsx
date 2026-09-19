import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwvishnme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwvishnme"/>`,
		"fallback": "icon-park-outline:ce-marking",
	});
}

export default Component;
