import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h69_glmrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h69_glmrc"/>`,
		"fallback": "mi:document-add",
	});
}

export default Component;
