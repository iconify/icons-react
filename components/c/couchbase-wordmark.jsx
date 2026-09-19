import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdvm4wbmz.css';
import '../../css/j/ji70huh2p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdvm4wbmz"/><path class="ji70huh2p"/>`,
		"fallback": "devicon:couchbase-wordmark",
	});
}

export default Component;
