import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eyltgdbjy.css';
import '../../css/z/z5425fk9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eyltgdbjy"/><path class="z5425fk9j"/></g>`,
		"fallback": "tabler:apple",
	});
}

export default Component;
