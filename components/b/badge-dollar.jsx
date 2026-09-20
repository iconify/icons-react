import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyospdzkg.css';
import '../../css/n/nrwfs8b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyospdzkg"/><path class="nrwfs8b5n"/>`,
		"fallback": "stash:badge-dollar",
	});
}

export default Component;
