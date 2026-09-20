import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0a_25-9h.css';
import '../../css/m/mfxe6gbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0a_25-9h"/><path class="mfxe6gbjn"/>`,
		"fallback": "octicon:archive-24",
	});
}

export default Component;
