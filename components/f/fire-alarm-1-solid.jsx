import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auleabc9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="auleabc9y"/>`,
		"fallback": "streamline-sharp:fire-alarm-1-solid",
	});
}

export default Component;
