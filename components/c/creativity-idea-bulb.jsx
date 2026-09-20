import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo3t5svif.css';
import '../../css/e/e95pqp9nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo3t5svif"/><path class="e95pqp9nl"/>`,
		"fallback": "streamline-freehand:creativity-idea-bulb",
	});
}

export default Component;
