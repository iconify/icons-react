import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn24bac4r.css';
import '../../css/x/xe3lk6bpi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn24bac4r"/><path class="xe3lk6bpi"/>`,
		"fallback": "octicon:copilot-warning-16",
	});
}

export default Component;
