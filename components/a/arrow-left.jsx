import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aexwcm9er.css';
import '../../css/c/ccdp7c34j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aexwcm9er wm-k"/><path class="ccdp7c34j wm-a"/>`,
		"fallback": "withicons-bauhaus:arrow-left",
	});
}

export default Component;
