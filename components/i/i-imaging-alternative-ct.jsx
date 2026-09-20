import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4porcctd.css';
import '../../css/e/egn_lcc1j.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4porcctd"/><path class="egn_lcc1j"/>`,
		"fallback": "medical-icon:i-imaging-alternative-ct",
	});
}

export default Component;
