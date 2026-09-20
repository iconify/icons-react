import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukyr80b4m.css';
import '../../css/z/zbs1n8-tz.css';
import '../../css/y/yynvv2qce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukyr80b4m"/><path class="zbs1n8-tz"/><path class="yynvv2qce"/>`,
		"fallback": "pixel:cassette-tape",
	});
}

export default Component;
