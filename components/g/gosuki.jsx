import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwsftlbby.css';
import '../../css/n/n-9-1s2vc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwsftlbby"/><path class="n-9-1s2vc"/>`,
		"fallback": "selfhst:gosuki",
	});
}

export default Component;
