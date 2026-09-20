import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7kvpk4yq.css';
import '../../css/a/amdm5y4pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7kvpk4yq"/><path class="amdm5y4pg"/>`,
		"fallback": "streamline-ultimate:headphones-customer-support-question-bold",
	});
}

export default Component;
