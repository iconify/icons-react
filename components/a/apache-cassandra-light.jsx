import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftuv1nbrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftuv1nbrm"/>`,
		"fallback": "selfhst:apache-cassandra-light",
	});
}

export default Component;
