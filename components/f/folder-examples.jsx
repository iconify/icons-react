import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufv-l2b0j.css';
import '../../css/a/aflrv12xp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufv-l2b0j"/><path class="aflrv12xp"/>`,
		"fallback": "material-icon-theme:folder-examples",
	});
}

export default Component;
