import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5a222bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5a222bso"/>`,
		"fallback": "uit:grip-horizontal-line",
	});
}

export default Component;
