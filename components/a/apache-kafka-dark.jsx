import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em5st3bao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em5st3bao"/>`,
		"fallback": "selfhst:apache-kafka-dark",
	});
}

export default Component;
