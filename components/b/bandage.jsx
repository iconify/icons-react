import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgf0afa9t.css';
import '../../css/a/avoltjbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rgf0afa9t"/><rect class="avoltjbjo"/></g>`,
		"fallback": "lucide:bandage",
	});
}

export default Component;
