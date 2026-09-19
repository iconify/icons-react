import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l9x5tccvj.css';
import '../../css/p/ppq4v8bqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l9x5tccvj"/><path class="ppq4v8bqy"/></g>`,
		"fallback": "healthicons:doctor-male2x-outline",
	});
}

export default Component;
