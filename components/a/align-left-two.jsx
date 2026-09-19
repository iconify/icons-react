import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nar4fkb5v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nar4fkb5v"/>`,
		"fallback": "icon-park-solid:align-left-two",
	});
}

export default Component;
