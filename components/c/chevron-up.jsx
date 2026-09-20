import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mne-racvv.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mne-racvv"/>`,
		"fallback": "octicon:chevron-up",
	});
}

export default Component;
