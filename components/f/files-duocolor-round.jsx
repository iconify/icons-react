import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/id9crk2kl.css';
import '../../css/a/a9-xx3bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="id9crk2kl"/><path class="a9-xx3bie"/></g>`,
		"fallback": "coolicons:files-duocolor-round",
	});
}

export default Component;
