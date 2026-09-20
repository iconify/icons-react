import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snrb6qbmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snrb6qbmf"/>`,
		"fallback": "selfhst:confluence-dark",
	});
}

export default Component;
