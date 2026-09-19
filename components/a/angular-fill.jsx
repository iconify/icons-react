import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpxx19b4u.css';
import '../../css/b/bq2iq2bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpxx19b4u"/><path class="bq2iq2bed"/>`,
		"fallback": "akar-icons:angular-fill",
	});
}

export default Component;
