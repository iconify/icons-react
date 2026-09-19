import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks4cp4bzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ks4cp4bzy"/>`,
		"fallback": "gravity-ui:face-neutral",
	});
}

export default Component;
