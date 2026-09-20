import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzicu7o9n.css';
import '../../css/a/aflrv12xp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzicu7o9n"/><path class="aflrv12xp"/>`,
		"fallback": "material-icon-theme:folder-examples-open",
	});
}

export default Component;
