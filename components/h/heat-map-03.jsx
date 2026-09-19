import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s92d9qb-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s92d9qb-a"/>`,
		"fallback": "carbon:heat-map-03",
	});
}

export default Component;
