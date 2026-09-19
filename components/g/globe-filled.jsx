import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r-3e29blm.css';
import '../../css/y/yirn1hcot.css';
import '../../css/k/k8fun-b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r-3e29blm"/><path class="yirn1hcot"/><path class="k8fun-b6n"/></g>`,
		"fallback": "bitcoin-icons:globe-filled",
	});
}

export default Component;
