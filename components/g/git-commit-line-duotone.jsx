import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k90m4o-1e.css';
import '../../css/d/dd3evbk6v.css';
import '../../css/s/sduv6uq4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k90m4o-1e"/><path class="dd3evbk6v"/><path class="sduv6uq4w"/></g>`,
		"fallback": "solar:git-commit-line-duotone",
	});
}

export default Component;
