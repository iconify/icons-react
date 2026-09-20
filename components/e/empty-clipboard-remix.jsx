import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1s3auczn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1s3auczn"/>`,
		"fallback": "streamline-plump:empty-clipboard-remix",
	});
}

export default Component;
