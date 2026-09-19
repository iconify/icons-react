import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al7gqttgw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al7gqttgw"/>`,
		"fallback": "cryptocurrency:evx",
	});
}

export default Component;
