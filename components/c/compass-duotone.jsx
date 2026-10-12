import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/b/b8jj4tcxi.css';
import '../../css/c/csdevybdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path clip-rule="evenodd" class="b8jj4tcxi"/><path class="csdevybdj"/></g>`,
		"fallback": "lucide-extended:compass-duotone",
	});
}

export default Component;
