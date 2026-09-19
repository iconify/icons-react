import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huh_2krav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="huh_2krav"/>`,
		"fallback": "griddy-icons:component-form-filled",
	});
}

export default Component;
