import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3-tzbc-a.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3-tzbc-a"/>`,
		"fallback": "octicon:circle-slash",
	});
}

export default Component;
