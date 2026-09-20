import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knh3k_bfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knh3k_bfq"/>`,
		"fallback": "selfhst:apache-cassandra-dark",
	});
}

export default Component;
