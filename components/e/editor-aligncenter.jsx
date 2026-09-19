import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alnok1cnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alnok1cnj"/>`,
		"fallback": "dashicons:editor-aligncenter",
	});
}

export default Component;
