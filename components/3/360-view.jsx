import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czu4wbtlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czu4wbtlg"/>`,
		"fallback": "iconoir:360-view",
	});
}

export default Component;
