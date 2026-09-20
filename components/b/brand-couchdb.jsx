import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mever1b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mever1b1g"/>`,
		"fallback": "tabler:brand-couchdb",
	});
}

export default Component;
