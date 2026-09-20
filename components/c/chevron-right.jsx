import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v31zzfo0l.css';

const viewBox = {"width":8,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v31zzfo0l"/>`,
		"fallback": "octicon:chevron-right",
	});
}

export default Component;
