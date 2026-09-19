import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8y2ds-k.css';
import '../../css/z/zs3id2b8k.css';
import '../../css/q/q-0qdxbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gx8y2ds-k"><path class="zs3id2b8k"/><path class="q-0qdxbih"/></g>`,
		"fallback": "akar-icons:align-right",
	});
}

export default Component;
