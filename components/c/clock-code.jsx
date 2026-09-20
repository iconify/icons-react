import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/er4ldyc7w.css';
import '../../css/t/tzcs0jirj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="er4ldyc7w"/><path class="tzcs0jirj"/></g>`,
		"fallback": "tabler:clock-code",
	});
}

export default Component;
