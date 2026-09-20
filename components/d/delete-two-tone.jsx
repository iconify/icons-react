import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk-seobxs.css';
import '../../css/q/ql3jlp3kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dk-seobxs"/><path class="ql3jlp3kr"/></g>`,
		"fallback": "keyline-icons:delete-two-tone",
	});
}

export default Component;
