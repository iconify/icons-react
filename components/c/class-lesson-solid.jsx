import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyc7y3bbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qyc7y3bbj"/>`,
		"fallback": "streamline-plump:class-lesson-solid",
	});
}

export default Component;
