import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs3i02bfn.css';
import '../../css/f/fr-2ovb-v.css';
import '../../css/c/cdqasfbix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cs3i02bfn"/><path class="fr-2ovb-v"/><circle class="cdqasfbix"/>`,
		"fallback": "carbon:ibm-event-endpoint-mgmt",
	});
}

export default Component;
