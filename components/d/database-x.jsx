import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x2glrpu2w.css';
import '../../css/h/h90vlqfmf.css';
import '../../css/t/tj6aivbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x2glrpu2w"/><path class="h90vlqfmf"/><ellipse class="tj6aivbzl"/></g>`,
		"fallback": "lucide:database-x",
	});
}

export default Component;
