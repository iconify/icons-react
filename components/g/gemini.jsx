import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw_p06a2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw_p06a2o"/>`,
		"fallback": "icon-park-outline:gemini",
	});
}

export default Component;
