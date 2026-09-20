import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/putkkbb4v.css';
import '../../css/b/ba-uen-7c.css';
import '../../css/f/fqi9fhbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="putkkbb4v"/><path class="ba-uen-7c"/><path class="fqi9fhbtz"/></g>`,
		"fallback": "tabler:git-pull-request",
	});
}

export default Component;
