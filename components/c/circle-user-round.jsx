import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkh7cy-lf.css';
import '../../css/r/rus9pebka.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tkh7cy-lf"/><circle class="rus9pebka"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "lucide:circle-user-round",
	});
}

export default Component;
