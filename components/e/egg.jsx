import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_rr6xiqh.css';
import '../../css/l/lejmcbbfw.css';
import '../../css/o/oui96b1vm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="z_rr6xiqh"/><path class="lejmcbbfw"/><path class="oui96b1vm"/></g>`,
		"fallback": "iconito:egg",
	});
}

export default Component;
