import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bud3f4goj.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bud3f4goj"/>`,
		"fallback": "octicon:file-zip",
	});
}

export default Component;
