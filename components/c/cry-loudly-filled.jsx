import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chlk_vb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chlk_vb9k"/>`,
		"fallback": "tdesign:cry-loudly-filled",
	});
}

export default Component;
