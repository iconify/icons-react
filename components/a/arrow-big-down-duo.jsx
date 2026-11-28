import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaxykhbwe.css';
import '../../css/i/idwsbdxlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uaxykhbwe"/><path class="idwsbdxlg primary"/>`,
		"fallback": "iconaut:arrow-big-down-duo",
	});
}

export default Component;
