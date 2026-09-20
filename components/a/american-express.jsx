import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyugebdld.css';
import '../../css/w/w238-db3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyugebdld"/><path class="w238-db3l"/>`,
		"fallback": "selfhst:american-express",
	});
}

export default Component;
