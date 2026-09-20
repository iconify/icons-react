import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxf1p3ugb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gxf1p3ugb"/>`,
		"fallback": "streamline-plump:database-server-3-solid",
	});
}

export default Component;
