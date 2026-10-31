import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mu_j_xboj.css';
import '../../css/n/n88d96rih.css';
import '../../css/n/n8j2c2bem.css';
import '../../css/e/eegaxhabc.css';
import '../../css/a/agduiccem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mu_j_xboj wm-shadow"/><path class="n88d96rih"/><path class="n8j2c2bem"/><path class="eegaxhabc"/><path class="agduiccem"/></g>`,
		"fallback": "withicons-retro:cherry",
	});
}

export default Component;
