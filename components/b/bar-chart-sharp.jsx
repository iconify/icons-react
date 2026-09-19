import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp2nw3bpc.css';
import '../../css/k/k-8iobcst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp2nw3bpc"/><path class="k-8iobcst"/>`,
		"fallback": "famicons:bar-chart-sharp",
	});
}

export default Component;
