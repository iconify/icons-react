import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jozze0brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jozze0brg"/>`,
		"fallback": "noviair:file-audio",
	});
}

export default Component;
