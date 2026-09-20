import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee3_s121s.css';
import '../../css/x/xyl9rzbno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee3_s121s"/><path class="xyl9rzbno"/>`,
		"fallback": "selfhst:feedpushr",
	});
}

export default Component;
