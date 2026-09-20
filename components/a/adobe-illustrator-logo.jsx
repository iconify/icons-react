import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/g2i9eacyj.css';
import '../../css/e/e6x_lacct.css';
import '../../css/r/r0e0--btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="g2i9eacyj"/><path class="e6x_lacct"/><path class="r0e0--btz"/></g>`,
		"fallback": "streamline-logos:adobe-illustrator-logo",
	});
}

export default Component;
