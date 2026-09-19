import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh3sju-sz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh3sju-sz"/>`,
		"fallback": "icon-park-solid:correct",
	});
}

export default Component;
