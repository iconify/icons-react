import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6trqbcub.css';
import '../../css/o/oly-m626v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6trqbcub"/><path class="oly-m626v"/></g>`,
		"fallback": "lucide-extended:hard-drive-upload-duotone",
	});
}

export default Component;
