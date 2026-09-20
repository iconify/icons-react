import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7a3r-bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="n7a3r-bxq"/>`,
		"fallback": "wordpress:close",
	});
}

export default Component;
