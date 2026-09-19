import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxh_a9ajg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxh_a9ajg"/>`,
		"fallback": "boxicons:form-filled",
	});
}

export default Component;
