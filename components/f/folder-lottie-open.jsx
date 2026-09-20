import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu9ugknqy.css';
import '../../css/d/dld45g65o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu9ugknqy"/><path class="dld45g65o"/>`,
		"fallback": "material-icon-theme:folder-lottie-open",
	});
}

export default Component;
