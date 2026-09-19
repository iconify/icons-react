import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-ln0mbug.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-ln0mbug"/>`,
		"fallback": "garden:file-presentation-26",
	});
}

export default Component;
