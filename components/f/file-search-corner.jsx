import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u5wmu6hoi.css';
import '../../css/n/nwr2oub_h.css';
import '../../css/a/av0kmmbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u5wmu6hoi"/><path class="nwr2oub_h"/><circle class="av0kmmbuk"/></g>`,
		"fallback": "lucide:file-search-corner",
	});
}

export default Component;
