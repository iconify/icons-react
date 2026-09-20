import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3ji-cbnb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3ji-cbnb"/>`,
		"fallback": "streamline:ai-science-spark-remix",
	});
}

export default Component;
