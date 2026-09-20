import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xjk_zbrsi.css';
import '../../css/f/fh3fxjrju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xjk_zbrsi"/><path class="fh3fxjrju"/></g>`,
		"fallback": "tabler:at-off",
	});
}

export default Component;
