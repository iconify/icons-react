import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9287rbno.css';
import '../../css/p/psjnid_5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9287rbno wm-k"/><path class="psjnid_5l wm-a"/>`,
		"fallback": "withicons-bauhaus:arrow-up-left",
	});
}

export default Component;
