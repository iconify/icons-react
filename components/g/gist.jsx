import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biji12x1i.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biji12x1i"/>`,
		"fallback": "octicon:gist",
	});
}

export default Component;
