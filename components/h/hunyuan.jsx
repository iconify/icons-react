import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcdt_kyqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcdt_kyqm"/>`,
		"fallback": "thesvg:hunyuan",
	});
}

export default Component;
