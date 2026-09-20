import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng8t65b2q.css';
import '../../css/r/rhohvnbdk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng8t65b2q"/><path class="rhohvnbdk"/>`,
		"fallback": "material-icon-theme:folder-job-open",
	});
}

export default Component;
