import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-4bk_b4n.css';
import '../../css/n/n5s4vsbpi.css';
import '../../css/c/cs6389b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o-4bk_b4n"/><path class="n5s4vsbpi"/><path class="cs6389b-q"/></g>`,
		"fallback": "tabler:filters",
	});
}

export default Component;
