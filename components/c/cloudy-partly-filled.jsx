import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgh23_rjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgh23_rjw"/>`,
		"fallback": "griddy-icons:cloudy-partly-filled",
	});
}

export default Component;
