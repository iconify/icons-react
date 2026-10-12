import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aasc8vbxv.css';
import '../../css/f/fu7i_4vmt.css';
import '../../css/p/puyadibwf.css';
import '../../css/d/djxw08b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aasc8vbxv"/><path class="fu7i_4vmt"/><path class="puyadibwf"/><path class="djxw08b2w"/></g>`,
		"fallback": "lucide-extended:images-duotone",
	});
}

export default Component;
