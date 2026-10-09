import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwypsp5ub.css';
import '../../css/g/g14r5ubhu.css';
import '../../css/d/dexi_790w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwypsp5ub"/><path class="g14r5ubhu"/><path class="dexi_790w"/>`,
		"fallback": "energy-icons:folder-search-48",
	});
}

export default Component;
