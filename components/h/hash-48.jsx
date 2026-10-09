import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psemm7bpq.css';
import '../../css/y/yeivt_bil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psemm7bpq"/><path class="yeivt_bil"/>`,
		"fallback": "energy-icons:hash-48",
	});
}

export default Component;
