import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmi3wdbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmi3wdbpd"/>`,
		"fallback": "ri:gallery-upload-line",
	});
}

export default Component;
