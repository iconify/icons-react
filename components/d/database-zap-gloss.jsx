import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmx0n_bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmx0n_bhl"/>`,
		"fallback": "withicons:database-zap-gloss",
	});
}

export default Component;
