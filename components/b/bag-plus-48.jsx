import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2gho-_w.css';
import '../../css/e/e6f488wbx.css';
import '../../css/c/c4_zttl1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb2gho-_w"/><path class="e6f488wbx"/><path class="c4_zttl1w"/>`,
		"fallback": "energy-icons:bag-plus-48",
	});
}

export default Component;
