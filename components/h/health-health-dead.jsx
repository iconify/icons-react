import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3285tnog.css';
import '../../css/r/rbbx4hzxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3285tnog"/><path class="rbbx4hzxe"/>`,
		"fallback": "streamline-pixel:health-health-dead",
	});
}

export default Component;
