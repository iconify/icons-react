import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1yt1nbnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1yt1nbnj"/>`,
		"fallback": "streamline-plump:ai-generate-variation-spark-solid",
	});
}

export default Component;
