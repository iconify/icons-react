import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ij--m_b1k.css';
import '../../css/d/de9kvmbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ij--m_b1k"/><path class="de9kvmbhj"/></g>`,
		"fallback": "tabler:arrow-guide",
	});
}

export default Component;
