import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r83_z9bkg.css';
import '../../css/b/bser5vtcv.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r83_z9bkg"/><circle class="bser5vtcv"/><circle class="fxwnb7vgp"/></g>`,
		"fallback": "lucide:forklift",
	});
}

export default Component;
