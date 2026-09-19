import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjsl_rbqf.css';
import '../../css/a/aypvy6buw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjsl_rbqf"/><path class="aypvy6buw"/>`,
		"fallback": "icomoon-free:dropbox",
	});
}

export default Component;
