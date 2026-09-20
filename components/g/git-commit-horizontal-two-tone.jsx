import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m_ft6pn-j.css';
import '../../css/b/btbcc9mqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m_ft6pn-j"/><path class="btbcc9mqd"/></g>`,
		"fallback": "keyline-icons:git-commit-horizontal-two-tone",
	});
}

export default Component;
