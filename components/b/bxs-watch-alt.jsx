import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfi6zzj9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfi6zzj9k"/>`,
		"fallback": "bx:bxs-watch-alt",
	});
}

export default Component;
