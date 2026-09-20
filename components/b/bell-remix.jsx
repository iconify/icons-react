import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw5i6eh9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw5i6eh9l"/>`,
		"fallback": "streamline-plump:bell-remix",
	});
}

export default Component;
