import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s17z00b3v.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s17z00b3v"/>`,
		"fallback": "fluent-mdl2:gripper-tool",
	});
}

export default Component;
