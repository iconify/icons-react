import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at-x-4buw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="at-x-4buw"/>`,
		"fallback": "streamline:ai-generate-music-spark-solid",
	});
}

export default Component;
