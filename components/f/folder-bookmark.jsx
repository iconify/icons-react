import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jfow2qm8p.css';
import '../../css/j/jl0bax64v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jfow2qm8p"/><path class="jl0bax64v"/></g>`,
		"fallback": "vadivam:folder-bookmark",
	});
}

export default Component;
