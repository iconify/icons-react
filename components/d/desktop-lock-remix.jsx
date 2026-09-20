import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl-ffz72e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl-ffz72e"/>`,
		"fallback": "streamline-plump:desktop-lock-remix",
	});
}

export default Component;
