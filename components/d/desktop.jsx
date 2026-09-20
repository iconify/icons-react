import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj6rg4i6l.css';
import '../../css/d/dae9h0beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="oj6rg4i6l"/><path class="dae9h0beu"/></g>`,
		"fallback": "meteor-icons:desktop",
	});
}

export default Component;
