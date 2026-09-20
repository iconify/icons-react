import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoy2yqb3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoy2yqb3b"/>`,
		"fallback": "selfhst:bulwark-light",
	});
}

export default Component;
