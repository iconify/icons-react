import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aewnve1os.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aewnve1os"/>`,
		"fallback": "devicon-plain:databricks-wordmark",
	});
}

export default Component;
