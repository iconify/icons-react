import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om201sw6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="om201sw6w"/>`,
		"fallback": "streamline-plump:dial-pad-finger-2-remix",
	});
}

export default Component;
