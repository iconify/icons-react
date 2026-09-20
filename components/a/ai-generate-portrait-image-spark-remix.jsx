import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-5p42bec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-5p42bec"/>`,
		"fallback": "streamline-plump:ai-generate-portrait-image-spark-remix",
	});
}

export default Component;
