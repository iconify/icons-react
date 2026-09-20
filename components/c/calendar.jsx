import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi5syqv6f.css';
import '../../css/y/ynooprbfx.css';
import '../../css/d/dhmi6ubno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi5syqv6f"/><path class="ynooprbfx"/><path clip-rule="evenodd" class="dhmi6ubno"/>`,
		"fallback": "stash:calendar",
	});
}

export default Component;
