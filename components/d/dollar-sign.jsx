import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6432zb_d.css';
import '../../css/a/alc0ykp4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6432zb_d"/><path class="alc0ykp4p"/>`,
		"fallback": "withicons-bauhaus:dollar-sign",
	});
}

export default Component;
