import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvs13wbop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvs13wbop"/>`,
		"fallback": "selfhst:datadog-light",
	});
}

export default Component;
