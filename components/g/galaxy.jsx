import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhc-nwb5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhc-nwb5d"/>`,
		"fallback": "at-icons:galaxy",
	});
}

export default Component;
