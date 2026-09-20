import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5i4rb8t.css';
import '../../css/r/rd02-vf7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5i4rb8t"/><path class="rd02-vf7n"/>`,
		"fallback": "selfhst:cookcli",
	});
}

export default Component;
