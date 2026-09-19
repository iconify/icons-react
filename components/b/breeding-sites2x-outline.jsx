import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oey5e8bwl.css';
import '../../css/b/bluqi5jhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oey5e8bwl"/><path class="bluqi5jhp"/></g>`,
		"fallback": "healthicons:breeding-sites2x-outline",
	});
}

export default Component;
