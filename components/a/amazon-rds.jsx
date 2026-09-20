import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axkw0ac2k.css';
import '../../css/a/aytd6oskt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axkw0ac2k"/><path class="aytd6oskt"/>`,
		"fallback": "selfhst:amazon-rds",
	});
}

export default Component;
