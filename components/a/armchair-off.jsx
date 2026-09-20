import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b34hqqb5f.css';
import '../../css/b/b6xso7row.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b34hqqb5f"/><path class="b6xso7row"/></g>`,
		"fallback": "tabler:armchair-off",
	});
}

export default Component;
