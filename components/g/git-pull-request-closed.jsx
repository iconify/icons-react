import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vg888-gag.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/z/zcrcylsxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vg888-gag"/><circle class="ez1x61b2a"/><circle class="zcrcylsxu"/></g>`,
		"fallback": "lucide:git-pull-request-closed",
	});
}

export default Component;
