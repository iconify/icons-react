import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-747lbuo.css';
import '../../css/s/s1egg1b2o.css';
import '../../css/t/t29japb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-747lbuo"/><path class="s1egg1b2o"/><path class="t29japb0o"/></g>`,
		"fallback": "tabler:hula-hoop",
	});
}

export default Component;
