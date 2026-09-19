import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grmnn1biq.css';

const viewBox = {"width":544,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grmnn1biq"/>`,
		"fallback": "ps:image",
	});
}

export default Component;
