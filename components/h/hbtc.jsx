import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvad6mxis.css';
import '../../css/s/sr82fubsa.css';
import '../../css/s/ss_1gcb2j.css';
import '../../css/a/a1mnqmbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qvad6mxis"/><path class="sr82fubsa"/><path class="ss_1gcb2j"/><path class="a1mnqmbwz"/>`,
		"fallback": "token:hbtc",
	});
}

export default Component;
