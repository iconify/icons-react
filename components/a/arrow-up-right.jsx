import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnicq_j2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="bnicq_j2t"/>`,
		"fallback": "wordpress:arrow-up-right",
	});
}

export default Component;
