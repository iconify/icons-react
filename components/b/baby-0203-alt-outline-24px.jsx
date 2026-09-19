import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ltsfecbzp.css';
import '../../css/v/v8aaw2bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ltsfecbzp"/><path class="v8aaw2bah"/></g>`,
		"fallback": "healthicons:baby-0203-alt-outline-24px",
	});
}

export default Component;
