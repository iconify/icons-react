import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/mi5qmx.css';
import '../../css/z/z4421m.css';
import '../../css/z/z-3bwb.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c mi5qmx"/><path class="a0m25c z4421m"/><path class="a0m25c z-3bwb"/>`,
		"fallback": "line-md:email-multiple",
	});
}

export default Component;
