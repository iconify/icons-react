import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylgliubwh.css';
import '../../css/w/w-gbphaza.css';
import '../../css/v/vlmlzenit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylgliubwh"/><path class="w-gbphaza"/><path class="vlmlzenit"/>`,
		"fallback": "fxemoji:dash",
	});
}

export default Component;
