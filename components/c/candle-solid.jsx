import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahv5oyb-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ahv5oyb-v"/>`,
		"fallback": "streamline-plump:candle-solid",
	});
}

export default Component;
