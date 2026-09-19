import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_lhvpb9l.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_lhvpb9l"/>`,
		"fallback": "ps:grooveshark",
	});
}

export default Component;
