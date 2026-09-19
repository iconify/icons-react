import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekeukp4zn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekeukp4zn"/>`,
		"fallback": "entypo-social:google-drive",
	});
}

export default Component;
