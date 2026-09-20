import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tjg5knr1x.css';
import '../../css/b/b61xtacet.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tjg5knr1x"/><path class="b61xtacet"/><path class="isy2lrdil"/></g>`,
		"fallback": "keyline-icons:image-arrow-right-two-tone",
	});
}

export default Component;
