import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvcu8c84i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvcu8c84i"/>`,
		"fallback": "streamline:ai-generate-music-spark-remix",
	});
}

export default Component;
