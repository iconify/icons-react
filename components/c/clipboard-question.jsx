import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoh9qo8fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoh9qo8fk"/>`,
		"fallback": "noviair:clipboard-question",
	});
}

export default Component;
