import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eme4hnzwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eme4hnzwk"/>`,
		"fallback": "tdesign:chevron-up-double",
	});
}

export default Component;
