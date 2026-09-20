import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jl0rmhb0f.css';
import '../../css/f/fhm5o0rol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jl0rmhb0f"/><path class="fhm5o0rol"/></g>`,
		"fallback": "lets-icons:chat",
	});
}

export default Component;
