import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/a/a2koo-blx.css';
import '../../css/t/twwa4bckn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz wm-k"/><path class="a2koo-blx wm-a"/><path class="twwa4bckn wm-a"/>`,
		"fallback": "withicons-bauhaus:circle-chevron-right",
	});
}

export default Component;
