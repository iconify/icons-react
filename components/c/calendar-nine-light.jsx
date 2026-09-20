import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aey68mb3i.css';
import '../../css/y/ynooprbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aey68mb3i"/><path class="ynooprbfx"/>`,
		"fallback": "stash:calendar-nine-light",
	});
}

export default Component;
