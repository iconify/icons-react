import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8u9_5smu.css';
import '../../css/m/mp927tb3p.css';
import '../../css/s/s820mbb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="u8u9_5smu"/><path class="mp927tb3p"/><path class="s820mbb7w"/></g>`,
		"fallback": "lucide:clipboard-pen-line",
	});
}

export default Component;
