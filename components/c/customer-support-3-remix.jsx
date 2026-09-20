import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugwzhb8gg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ugwzhb8gg"/>`,
		"fallback": "streamline-plump:customer-support-3-remix",
	});
}

export default Component;
