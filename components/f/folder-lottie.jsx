import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbbjl8juq.css';
import '../../css/d/dld45g65o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbbjl8juq"/><path class="dld45g65o"/>`,
		"fallback": "material-icon-theme:folder-lottie",
	});
}

export default Component;
