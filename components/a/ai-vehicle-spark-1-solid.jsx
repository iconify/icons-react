import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8-dsox2t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8-dsox2t"/>`,
		"fallback": "streamline:ai-vehicle-spark-1-solid",
	});
}

export default Component;
