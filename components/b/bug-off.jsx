import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ciy9r72nx.css';
import '../../css/w/wff0vobek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ciy9r72nx"/><path class="wff0vobek"/></g>`,
		"fallback": "lucide:bug-off",
	});
}

export default Component;
