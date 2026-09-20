import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lih_j9_oa.css';
import '../../css/d/debdggzbs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lih_j9_oa"/><path class="debdggzbs"/>`,
		"fallback": "material-icon-theme:folder-taskfile-open",
	});
}

export default Component;
