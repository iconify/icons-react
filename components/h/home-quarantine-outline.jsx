import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/my8cz-grc.css';
import '../../css/w/wpily5bas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="my8cz-grc"/><path class="wpily5bas"/></g>`,
		"fallback": "healthicons:home-quarantine-outline",
	});
}

export default Component;
