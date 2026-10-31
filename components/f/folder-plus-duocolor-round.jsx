import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oh49elb1a.css';
import '../../css/o/osfl_dbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oh49elb1a"/><path class="osfl_dbub"/></g>`,
		"fallback": "coolicons:folder-plus-duocolor-round",
	});
}

export default Component;
