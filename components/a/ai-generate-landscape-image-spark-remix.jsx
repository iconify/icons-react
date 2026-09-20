import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt55yfbrp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kt55yfbrp"/>`,
		"fallback": "streamline:ai-generate-landscape-image-spark-remix",
	});
}

export default Component;
