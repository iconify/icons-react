import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_si3tfrr.css';
import '../../css/e/edghc2bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z_si3tfrr"/><path class="edghc2bfh primary"/>`,
		"fallback": "iconaut:flow-display-duo",
	});
}

export default Component;
