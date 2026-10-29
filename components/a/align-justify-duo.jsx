import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbd8sc2no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbd8sc2no"/>`,
		"fallback": "withicons:align-justify-duo",
	});
}

export default Component;
