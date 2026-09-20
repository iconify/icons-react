import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkhy8zgoz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qkhy8zgoz"/>`,
		"fallback": "streamline-plump:industry-innovation-and-infrastructure-solid",
	});
}

export default Component;
