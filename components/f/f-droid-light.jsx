import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um9s7iazo.css';
import '../../css/f/fo7w_pq-j.css';
import '../../css/f/f7wi88xzu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um9s7iazo"/><path class="fo7w_pq-j"/><path class="f7wi88xzu"/>`,
		"fallback": "selfhst:f-droid-light",
	});
}

export default Component;
