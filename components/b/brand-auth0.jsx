import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvz5irb5y.css';
import '../../css/x/x51oakbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rvz5irb5y"/><path class="x51oakbtg"/></g>`,
		"fallback": "tabler:brand-auth0",
	});
}

export default Component;
