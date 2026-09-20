import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v43rpnbsp.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v43rpnbsp"/>`,
		"fallback": "octicon:diff-removed",
	});
}

export default Component;
