import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r4um1klfi.css';
import '../../css/u/ugkzqel7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r4um1klfi"/><path class="ugkzqel7q"/></g>`,
		"fallback": "streamline-sharp-color:end-point-arrow",
	});
}

export default Component;
