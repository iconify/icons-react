import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/j/jlkr07bba.css';
import '../../css/m/muymfi9gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path class="jlkr07bba"/><path class="muymfi9gh"/></g>`,
		"fallback": "lucide-extended:eclipse-duotone",
	});
}

export default Component;
