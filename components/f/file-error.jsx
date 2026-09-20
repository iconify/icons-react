import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw7q3l5ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jw7q3l5ax"/>`,
		"fallback": "reicon:file-error",
	});
}

export default Component;
