import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uosz9fbqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uosz9fbqc"/>`,
		"fallback": "streamline-plump:hierarchy-1-solid",
	});
}

export default Component;
