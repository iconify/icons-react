import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bd5xe3m9n.css';
import '../../css/i/itk6l5bws.css';
import '../../css/t/t-6n5bc-q.css';
import '../../css/a/a55dp_8ta.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bd5xe3m9n"/><path class="itk6l5bws"/><path class="t-6n5bc-q"/><path class="a55dp_8ta"/></g>`,
		"fallback": "fluent-emoji-flat:first-quarter-moon",
	});
}

export default Component;
