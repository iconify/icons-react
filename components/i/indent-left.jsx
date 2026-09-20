import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izspb1b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izspb1b0l"/>`,
		"fallback": "tdesign:indent-left",
	});
}

export default Component;
