import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js9qw7okl.css';
import '../../css/e/emn3ltbyq.css';
import '../../css/g/gylysco9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="js9qw7okl"/><path class="emn3ltbyq"/><path class="gylysco9n"/></g>`,
		"fallback": "fluent-emoji-flat:chair",
	});
}

export default Component;
