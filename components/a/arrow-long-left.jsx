import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x467bpb8x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x467bpb8x"/>`,
		"fallback": "entypo:arrow-long-left",
	});
}

export default Component;
