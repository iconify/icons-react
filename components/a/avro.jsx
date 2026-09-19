import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga1wr6bvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga1wr6bvm"/>`,
		"fallback": "file-icons:avro",
	});
}

export default Component;
