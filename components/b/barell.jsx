import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ht1jw1baz.css';
import '../../css/m/mt7-dnx6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ht1jw1baz"/><path class="mt7-dnx6r"/></g>`,
		"fallback": "tabler:barell",
	});
}

export default Component;
