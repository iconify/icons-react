import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xir9p0qyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xir9p0qyb"/>`,
		"fallback": "streamline-plump:ai-generate-variation-spark-remix",
	});
}

export default Component;
