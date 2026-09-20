import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-w3942xx.css';
import '../../css/c/csowzdbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-w3942xx"/><path class="csowzdbdh"/>`,
		"fallback": "octicon:fold-up-24",
	});
}

export default Component;
