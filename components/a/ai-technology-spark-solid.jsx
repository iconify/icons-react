import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4l1h8beg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a4l1h8beg"/>`,
		"fallback": "streamline-plump:ai-technology-spark-solid",
	});
}

export default Component;
