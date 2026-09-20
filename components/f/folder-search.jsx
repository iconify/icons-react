import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rijkm3bmk.css';
import '../../css/j/j8w182b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rijkm3bmk"/><circle class="j8w182b2f"/></g>`,
		"fallback": "meteor-icons:folder-search",
	});
}

export default Component;
