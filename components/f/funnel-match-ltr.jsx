import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gac1gm6_a.css';
import '../../css/l/lf-esqlup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gac1gm6_a"/><path class="lf-esqlup"/>`,
		"fallback": "ooui:funnel-match-ltr",
	});
}

export default Component;
