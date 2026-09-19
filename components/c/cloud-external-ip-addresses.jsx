import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqle1m17k.css';
import '../../css/d/dw1rn2v6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqle1m17k"/><path class="dw1rn2v6s"/>`,
		"fallback": "gcp:cloud-external-ip-addresses",
	});
}

export default Component;
