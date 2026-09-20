import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za7xkl_6x.css';
import '../../css/x/xd0ybnb5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za7xkl_6x"/><path class="xd0ybnb5n"/>`,
		"fallback": "selfhst:cert-manager",
	});
}

export default Component;
