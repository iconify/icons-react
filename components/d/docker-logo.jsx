import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bmua52b4m.css';
import '../../css/w/w4wfqqvrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="bmua52b4m"/><path class="w4wfqqvrh"/></g>`,
		"fallback": "streamline-logos:docker-logo",
	});
}

export default Component;
