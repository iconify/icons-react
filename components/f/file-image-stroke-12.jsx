import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quobgb7ei.css';
import '../../css/s/s3cqxlbus.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quobgb7ei"/><circle class="s3cqxlbus"/>`,
		"fallback": "garden:file-image-stroke-12",
	});
}

export default Component;
