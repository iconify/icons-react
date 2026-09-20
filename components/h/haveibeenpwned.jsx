import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/depzesuhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="depzesuhi"/>`,
		"fallback": "simple-icons:haveibeenpwned",
	});
}

export default Component;
