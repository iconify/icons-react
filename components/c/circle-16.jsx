import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odlgx4b7f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odlgx4b7f"/>`,
		"fallback": "octicon:circle-16",
	});
}

export default Component;
