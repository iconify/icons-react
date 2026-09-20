import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnghrpb1d.css';
import '../../css/b/by4txvb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnghrpb1d"/><path class="by4txvb2x"/>`,
		"fallback": "uim:clock-nine",
	});
}

export default Component;
