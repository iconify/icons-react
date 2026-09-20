import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqvnf0ygp.css';
import '../../css/x/x7b-zkp6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pqvnf0ygp"/><path class="x7b-zkp6h"/></g>`,
		"fallback": "keyline-icons:caret-down-fill",
	});
}

export default Component;
