import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnjf8b6m.css';
import '../../css/h/hogxnibkc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnjf8b6m"/><path class="hogxnibkc"/>`,
		"fallback": "material-icon-theme:folder-plastic",
	});
}

export default Component;
