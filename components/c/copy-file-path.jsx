import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlf7r1kic.css';
import '../../css/s/sicbtiqev.css';
import '../../css/m/mrcf2ubsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlf7r1kic"/><rect class="sicbtiqev"/><path class="mrcf2ubsb"/></g>`,
		"fallback": "lucide-lab:copy-file-path",
	});
}

export default Component;
