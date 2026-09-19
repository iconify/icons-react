import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pew3ofbkh.css';
import '../../css/f/fp1_w-bip.css';
import '../../css/j/j57h7grwb.css';
import '../../css/o/opicw6a2l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pew3ofbkh"/><path class="fp1_w-bip"/><path class="j57h7grwb"/><path class="opicw6a2l"/>`,
		"fallback": "devicon:elasticsearch-wordmark",
	});
}

export default Component;
