import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcghi8bhd.css';
import '../../css/a/a_yeysi6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcghi8bhd"/><path class="a_yeysi6i"/>`,
		"fallback": "streamline-freehand:copy-paste-clipboard",
	});
}

export default Component;
