import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlp7h4uqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hlp7h4uqd"/>`,
		"fallback": "streamline-plump:ai-technology-spark-remix",
	});
}

export default Component;
