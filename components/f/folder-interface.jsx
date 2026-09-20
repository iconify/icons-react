import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch5-wbctd.css';
import '../../css/b/bey54-03p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch5-wbctd"/><path class="bey54-03p"/>`,
		"fallback": "material-icon-theme:folder-interface",
	});
}

export default Component;
