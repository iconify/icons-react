import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsn8ivtct.css';
import '../../css/i/ixnpacb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nsn8ivtct"/><path class="ixnpacb5f"/></g>`,
		"fallback": "coolicons:chef-hat-duocolor-round",
	});
}

export default Component;
