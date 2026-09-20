import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sr5ms0b6a.css';
import '../../css/s/s3cvecc6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sr5ms0b6a"/><path class="s3cvecc6j"/></g>`,
		"fallback": "lets-icons:filter-alt-fill",
	});
}

export default Component;
