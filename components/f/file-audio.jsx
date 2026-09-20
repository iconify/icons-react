import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eq22jdc6o.css';
import '../../css/j/jgri_acrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eq22jdc6o"/><path class="jgri_acrl"/></g>`,
		"fallback": "lucide:file-audio",
	});
}

export default Component;
