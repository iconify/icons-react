import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hrzs8jbti.css';
import '../../css/v/v74qchbee.css';
import '../../css/i/i3im3xb9b.css';
import '../../css/w/wtctkibiy.css';
import '../../css/d/d0-b-bjen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hrzs8jbti wm-shadow"/><path class="v74qchbee wm-shadow"/><path class="i3im3xb9b"/><path class="wtctkibiy"/><path class="d0-b-bjen"/></g>`,
		"fallback": "withicons-brutal:fireplace",
	});
}

export default Component;
