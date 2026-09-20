import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht4j2lblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ht4j2lblx"/>`,
		"fallback": "reicon:eye-off2-filled",
	});
}

export default Component;
