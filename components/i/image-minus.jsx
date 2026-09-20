import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfhuhrbww.css';
import '../../css/n/nol19vq4t.css';
import '../../css/b/b4fcxnb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfhuhrbww"/><circle class="nol19vq4t"/><path class="b4fcxnb0b"/></g>`,
		"fallback": "lucide:image-minus",
	});
}

export default Component;
