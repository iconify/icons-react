import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adu9azuga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adu9azuga"/>`,
		"fallback": "ri:external-link-line",
	});
}

export default Component;
