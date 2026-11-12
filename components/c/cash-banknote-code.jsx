import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hf630xb3e.css';
import '../../css/c/cvuyb4ulo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hf630xb3e"/><path class="cvuyb4ulo"/></g>`,
		"fallback": "tabler:cash-banknote-code",
	});
}

export default Component;
