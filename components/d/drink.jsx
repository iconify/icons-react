import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vry51s4gb.css';
import '../../css/w/wxx5nhb-e.css';
import '../../css/a/amd21sbho.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vry51s4gb"/><circle class="wxx5nhb-e"/><path class="amd21sbho"/>`,
		"fallback": "nimbus:drink",
	});
}

export default Component;
