import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnwqvcbpt.css';
import '../../css/c/cepmc47wq.css';
import '../../css/p/pwmof2vgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnwqvcbpt"/><path clip-rule="evenodd" class="cepmc47wq"/><path class="pwmof2vgp"/></g>`,
		"fallback": "lucide-extended:book-heart-duotone",
	});
}

export default Component;
