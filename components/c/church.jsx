import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9bnj9z9i.css';
import '../../css/l/lfqd9-qsa.css';
import '../../css/g/gnpj2gcot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a9bnj9z9i"/><path class="lfqd9-qsa"/><path class="gnpj2gcot"/></g>`,
		"fallback": "lucide:church",
	});
}

export default Component;
