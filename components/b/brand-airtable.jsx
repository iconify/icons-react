import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pritbac9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pritbac9q"/>`,
		"fallback": "tabler:brand-airtable",
	});
}

export default Component;
