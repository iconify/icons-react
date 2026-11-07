import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtjzwnbwv.css';
import '../../css/d/dbws_7b9j.css';
import '../../css/l/lyi1fbbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtjzwnbwv"/><path class="dbws_7b9j"/><path class="lyi1fbbsc"/>`,
		"fallback": "solar:code-bold",
	});
}

export default Component;
