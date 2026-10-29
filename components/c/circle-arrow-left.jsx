import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdx-_oc4k.css';
import '../../css/r/rf06sdq9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdx-_oc4k wm-k"/><path class="rf06sdq9n wm-a"/>`,
		"fallback": "withicons-bauhaus:circle-arrow-left",
	});
}

export default Component;
