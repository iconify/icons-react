import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uk-eumb3f.css';
import '../../css/x/xb0-1gk4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uk-eumb3f"/><path class="xb0-1gk4b"/></g>`,
		"fallback": "keyline-icons:circle-japanese-yen",
	});
}

export default Component;
