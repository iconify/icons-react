import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prjf5xbpp.css';

const viewBox = {"width":8,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prjf5xbpp"/>`,
		"fallback": "octicon:dash",
	});
}

export default Component;
