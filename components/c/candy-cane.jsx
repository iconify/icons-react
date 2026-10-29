import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hya0m4b1r.css';
import '../../css/u/utm1ftb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hya0m4b1r wm-k"/><path class="utm1ftb-c wm-a"/>`,
		"fallback": "withicons-bauhaus:candy-cane",
	});
}

export default Component;
