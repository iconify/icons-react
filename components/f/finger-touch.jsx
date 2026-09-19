import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuhjp4b3q.css';
import '../../css/s/sx7umwbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuhjp4b3q"/><path class="sx7umwbzf"/>`,
		"fallback": "boxicons:finger-touch",
	});
}

export default Component;
