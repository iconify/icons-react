import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrw7sibnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrw7sibnz"/>`,
		"fallback": "mdi:image-size-select-small",
	});
}

export default Component;
