import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z42gu4bcz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z42gu4bcz"/>`,
		"fallback": "streamline:ai-technology-spark-remix",
	});
}

export default Component;
