import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd2-fnpdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jd2-fnpdk"/>`,
		"fallback": "streamline-sharp:credit-card-disable-remix",
	});
}

export default Component;
