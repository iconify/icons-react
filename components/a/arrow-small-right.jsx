import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvtehdb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvtehdb_f"/>`,
		"fallback": "heroicons:arrow-small-right",
	});
}

export default Component;
