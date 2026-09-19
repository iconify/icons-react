import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccug79xbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccug79xbx"/>`,
		"fallback": "file-icons:config-coffeescript",
	});
}

export default Component;
