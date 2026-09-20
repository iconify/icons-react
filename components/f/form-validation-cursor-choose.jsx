import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb6gv4imc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb6gv4imc"/>`,
		"fallback": "streamline-freehand:form-validation-cursor-choose",
	});
}

export default Component;
