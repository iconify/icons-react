import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8r7eptda.css';
import '../../css/u/u1tsesnyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8r7eptda"/><path class="u1tsesnyu"/>`,
		"fallback": "material-icon-theme:folder-ci-open",
	});
}

export default Component;
