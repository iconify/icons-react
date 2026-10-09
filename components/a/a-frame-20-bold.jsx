import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxj-1cpyy.css';
import '../../css/b/bhq-_uklw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxj-1cpyy"/><path class="bhq-_uklw"/>`,
		"fallback": "energy-icons:a-frame-20-bold",
	});
}

export default Component;
