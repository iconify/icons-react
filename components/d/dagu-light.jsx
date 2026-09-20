import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz274dbsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz274dbsn"/>`,
		"fallback": "selfhst:dagu-light",
	});
}

export default Component;
