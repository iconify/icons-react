import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z6k2-l8dm.css';
import '../../css/p/pn48gtbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z6k2-l8dm"/><circle class="pn48gtbgw"/></g>`,
		"fallback": "lucide:file-cog-2",
	});
}

export default Component;
