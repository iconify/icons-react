import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x56uid0pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x56uid0pq"/>`,
		"fallback": "ix:aas-project-tc",
	});
}

export default Component;
