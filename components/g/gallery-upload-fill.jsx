import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k70dj_bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k70dj_bzt"/>`,
		"fallback": "ri:gallery-upload-fill",
	});
}

export default Component;
