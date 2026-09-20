import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8f6-zbvd.css';
import '../../css/m/mg23doo2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8f6-zbvd"/><path class="mg23doo2g"/>`,
		"fallback": "octicon:file-check-24",
	});
}

export default Component;
