import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oy6nqv02f.css';
import '../../css/v/vbgub7z9d.css';
import '../../css/n/nol19vq4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oy6nqv02f"/><path class="vbgub7z9d"/><circle class="nol19vq4t"/></g>`,
		"fallback": "lucide:image-sparkles",
	});
}

export default Component;
