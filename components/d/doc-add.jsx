import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osaivzkyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osaivzkyr"/>`,
		"fallback": "icon-park-outline:doc-add",
	});
}

export default Component;
