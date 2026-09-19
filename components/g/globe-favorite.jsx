import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlp6nh86n.css';
import '../../css/n/ng73f_8fh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlp6nh86n"/><path class="ng73f_8fh"/>`,
		"fallback": "gis:globe-favorite",
	});
}

export default Component;
