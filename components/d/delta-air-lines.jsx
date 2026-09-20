import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lydqgnbpm.css';
import '../../css/a/a4bwvchjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lydqgnbpm"/><path class="a4bwvchjc"/>`,
		"fallback": "selfhst:delta-air-lines",
	});
}

export default Component;
