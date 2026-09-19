import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3vg0rc7o.css';

const viewBox = {"width":471,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3vg0rc7o"/>`,
		"fallback": "websymbol:down-micro",
	});
}

export default Component;
