import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aixq4db0w.css';
import '../../css/d/deb9mesxm.css';
import '../../css/i/iwlahz8ky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aixq4db0w"/><path class="deb9mesxm"/><path class="iwlahz8ky"/>`,
		"fallback": "fxemoji:document",
	});
}

export default Component;
