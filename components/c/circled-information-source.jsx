import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awmkfjszx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awmkfjszx"/>`,
		"fallback": "dinkie-icons:circled-information-source",
	});
}

export default Component;
