import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzhztek1e.css';
import '../../css/a/a1lsv6bmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzhztek1e"/><path class="a1lsv6bmw"/>`,
		"fallback": "selfhst:actual-budget",
	});
}

export default Component;
