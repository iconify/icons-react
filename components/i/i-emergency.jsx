import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-8yzyb5a.css';
import '../../css/j/jy7k-3hfv.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-8yzyb5a"/><path class="jy7k-3hfv"/>`,
		"fallback": "medical-icon:i-emergency",
	});
}

export default Component;
