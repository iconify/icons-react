import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yybeh6b4o.css';
import '../../css/r/rc1rp4d6j.css';
import '../../css/h/h2w2gxl4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yybeh6b4o"/><path class="rc1rp4d6j"/><path class="h2w2gxl4v"/>`,
		"fallback": "energy-icons:gravity-base-48-bold",
	});
}

export default Component;
