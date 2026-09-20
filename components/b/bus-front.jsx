import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6zdbdb4h.css';
import '../../css/p/ptcyaub2w.css';
import '../../css/c/cfa9k9bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h6zdbdb4h"/><rect class="ptcyaub2w"/><path class="cfa9k9bhj"/></g>`,
		"fallback": "lucide:bus-front",
	});
}

export default Component;
