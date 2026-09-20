import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enm7a0b7v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enm7a0b7v"/>`,
		"fallback": "streamline:ai-navigation-spark-remix",
	});
}

export default Component;
