import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnqs6060b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vnqs6060b"/>`,
		"fallback": "ix:asset-indoor",
	});
}

export default Component;
