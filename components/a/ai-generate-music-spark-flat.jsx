import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rbj7_3bze.css';
import '../../css/b/b9vmrl3ep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rbj7_3bze"/><path class="b9vmrl3ep"/></g>`,
		"fallback": "streamline-color:ai-generate-music-spark-flat",
	});
}

export default Component;
