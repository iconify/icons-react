import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k49ho6lfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k49ho6lfr"/>`,
		"fallback": "vadivam:hdmi-port",
	});
}

export default Component;
