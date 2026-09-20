import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_hwnubhd.css';
import '../../css/u/ud9q8oepu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_hwnubhd"/><path class="ud9q8oepu"/>`,
		"fallback": "mingcute:dropbox-fill",
	});
}

export default Component;
