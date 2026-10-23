import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qodwunbcg.css';
import '../../css/c/cz4_8nymz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qodwunbcg"/><path class="cz4_8nymz"/></g>`,
		"fallback": "vadivam:coffee",
	});
}

export default Component;
