import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shb46vb8z.css';
import '../../css/g/g-y7nybno.css';
import '../../css/n/njq8ibhrr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shb46vb8z"/><path class="g-y7nybno"/><path class="njq8ibhrr"/>`,
		"fallback": "energy-icons:cam-48-bold",
	});
}

export default Component;
