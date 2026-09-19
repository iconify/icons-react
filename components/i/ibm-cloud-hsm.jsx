import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs1m6rt0a.css';
import '../../css/o/onr7_4buh.css';
import '../../css/e/eqzj32bze.css';
import '../../css/o/obo5obcev.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs1m6rt0a"/><circle class="onr7_4buh"/><circle class="eqzj32bze"/><path class="obo5obcev"/>`,
		"fallback": "carbon:ibm-cloud-hsm",
	});
}

export default Component;
