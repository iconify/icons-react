import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf0pdw_6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf0pdw_6a"/>`,
		"fallback": "octicon:bell-fill-24",
	});
}

export default Component;
