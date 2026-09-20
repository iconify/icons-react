import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw_19yq0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw_19yq0m"/>`,
		"fallback": "ix:ingestion",
	});
}

export default Component;
