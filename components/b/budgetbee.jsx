import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgwnx6eoh.css';
import '../../css/a/adak2ebid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgwnx6eoh"/><path class="adak2ebid"/>`,
		"fallback": "selfhst:budgetbee",
	});
}

export default Component;
