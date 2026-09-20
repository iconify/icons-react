import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqc085xkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqc085xkk"/>`,
		"fallback": "simple-icons:googledisplayandvideo360",
	});
}

export default Component;
