import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-9-ho40l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-9-ho40l"/>`,
		"fallback": "streamline-plump:gift-remix",
	});
}

export default Component;
