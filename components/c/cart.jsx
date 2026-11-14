import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjl2bebha.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zbq9iiu1h.css';
import '../../css/g/gc95_g7tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjl2bebha"/><g class="mc2zb0bvp"><circle class="zbq9iiu1h"/><circle class="gc95_g7tz"/></g></g>`,
		"fallback": "struq:cart",
	});
}

export default Component;
