import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qhfdx-b0r.css';
import '../../css/y/yn9w9ccbt.css';
import '../../css/n/nb_n5ib0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qhfdx-b0r"/><path class="yn9w9ccbt"/><path class="nb_n5ib0a"/></g>`,
		"fallback": "keyline-icons:git-fork-two-tone",
	});
}

export default Component;
