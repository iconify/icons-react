import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgc7hzbms.css';
import '../../css/z/zv-_rfb2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgc7hzbms"/><path class="zv-_rfb2x"/>`,
		"fallback": "streamline-plump:graduation-cap-solid",
	});
}

export default Component;
