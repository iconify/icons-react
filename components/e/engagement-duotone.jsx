import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcknhyrwe.css';
import '../../css/r/r25-6db-a.css';
import '../../css/m/m-8o9lbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcknhyrwe"/><path class="r25-6db-a"/><path class="m-8o9lbsg"/>`,
		"fallback": "stash:engagement-duotone",
	});
}

export default Component;
