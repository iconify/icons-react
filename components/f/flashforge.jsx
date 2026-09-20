import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj6jh_bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj6jh_bqt"/>`,
		"fallback": "thesvg-color:flashforge",
	});
}

export default Component;
