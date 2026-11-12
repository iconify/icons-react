import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7m4sz57z.css';
import '../../css/z/z-hzdxb8f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7m4sz57z"/><path class="z-hzdxb8f"/>`,
		"fallback": "devicon:databricks-wordmark",
	});
}

export default Component;
