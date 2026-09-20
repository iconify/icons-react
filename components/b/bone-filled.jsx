import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aupw2dbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aupw2dbrq"/>`,
		"fallback": "tdesign:bone-filled",
	});
}

export default Component;
