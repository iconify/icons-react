import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re-fh7khr.css';
import '../../css/g/gukoqncpd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="re-fh7khr"/><path class="gukoqncpd"/></g>`,
		"fallback": "streamline-color:hang-up-2",
	});
}

export default Component;
