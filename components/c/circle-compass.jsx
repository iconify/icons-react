import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5phapbml.css';

const viewBox = {"width":23,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5phapbml"/>`,
		"fallback": "et:circle-compass",
	});
}

export default Component;
