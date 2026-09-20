import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cipng3b0p.css';
import '../../css/s/sjrjyxbla.css';
import '../../css/w/w8l0xeb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cipng3b0p"/><path class="sjrjyxbla"/><path class="w8l0xeb0g"/></g>`,
		"fallback": "keyline-icons:git-graph-two-tone",
	});
}

export default Component;
