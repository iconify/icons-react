import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7-vuo9nb.css';
import '../../css/x/x15-e255r.css';
import '../../css/o/o3km89xty.css';
import '../../css/w/wsf77guzo.css';

const viewBox = {"width":99.986,"height":100.002};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7-vuo9nb"/><path class="x15-e255r"/><path class="o3km89xty"/><path class="wsf77guzo"/>`,
		"fallback": "flat-ui:app-store",
	});
}

export default Component;
