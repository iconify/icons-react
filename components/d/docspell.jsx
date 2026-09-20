import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keo_ub1ao.css';
import '../../css/m/mrxynabnu.css';
import '../../css/v/vgjcg77tr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keo_ub1ao"/><path class="mrxynabnu"/><path class="vgjcg77tr"/>`,
		"fallback": "selfhst:docspell",
	});
}

export default Component;
