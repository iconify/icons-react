import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgupoibyg.css';
import '../../css/l/lkae4mbsj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgupoibyg"/><path class="lkae4mbsj"/>`,
		"fallback": "energy-icons:icicles-48",
	});
}

export default Component;
