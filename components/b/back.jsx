import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbs-olz4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tbs-olz4e"/>`,
		"fallback": "icon-park-solid:back",
	});
}

export default Component;
