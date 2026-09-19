import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txt8bqbzk.css';
import '../../css/d/dbsyz0f1y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txt8bqbzk"/><path class="dbsyz0f1y"/>`,
		"fallback": "devicon:ghost-wordmark",
	});
}

export default Component;
