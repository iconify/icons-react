import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hblpb_bqd.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hblpb_bqd"/>`,
		"fallback": "jam:dashboard",
	});
}

export default Component;
