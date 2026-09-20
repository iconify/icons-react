import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgfptlk-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mgfptlk-p"/>`,
		"fallback": "streamline:ai-redo-spark-solid",
	});
}

export default Component;
