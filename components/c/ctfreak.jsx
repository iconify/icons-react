import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phezrpb0j.css';
import '../../css/r/rbhs_9jqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phezrpb0j"/><path class="rbhs_9jqq"/>`,
		"fallback": "selfhst:ctfreak",
	});
}

export default Component;
