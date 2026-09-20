import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lszm1acwc.css';
import '../../css/u/u4bkq5bdg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lszm1acwc"/><path class="u4bkq5bdg"/>`,
		"fallback": "material-icon-theme:folder-svg",
	});
}

export default Component;
