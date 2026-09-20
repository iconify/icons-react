import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad2k74bfu.css';
import '../../css/g/gh-igyr-n.css';
import '../../css/f/f3wvhbb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ad2k74bfu"/><path class="gh-igyr-n"/><path clip-rule="evenodd" class="f3wvhbb1j"/></g>`,
		"fallback": "lets-icons:chat-search-fill",
	});
}

export default Component;
