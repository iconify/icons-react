import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tikjj3y7d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tikjj3y7d"/>`,
		"fallback": "streamline-flex:ai-generate-portrait-image-spark-solid",
	});
}

export default Component;
