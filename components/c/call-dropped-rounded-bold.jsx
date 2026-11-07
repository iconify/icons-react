import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnjvphbgm.css';
import '../../css/t/twgj61vyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnjvphbgm"/><path class="twgj61vyf"/>`,
		"fallback": "solar:call-dropped-rounded-bold",
	});
}

export default Component;
