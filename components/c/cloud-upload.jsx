import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_-cmtb5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_-cmtb5a"/>`,
		"fallback": "octicon:cloud-upload",
	});
}

export default Component;
