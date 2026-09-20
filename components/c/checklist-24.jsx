import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw5jslsmt.css';
import '../../css/l/l5ucbdcah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw5jslsmt"/><path class="l5ucbdcah"/>`,
		"fallback": "octicon:checklist-24",
	});
}

export default Component;
