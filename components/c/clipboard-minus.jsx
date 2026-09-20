import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw6nctb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw6nctb3f"/>`,
		"fallback": "mdi:clipboard-minus",
	});
}

export default Component;
