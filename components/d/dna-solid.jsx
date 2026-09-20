import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnxigjgcg.css';
import '../../css/r/rlw68tb9u.css';
import '../../css/s/sd_lm-bds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnxigjgcg"/><path class="rlw68tb9u"/><path class="sd_lm-bds"/>`,
		"fallback": "streamline-plump:dna-solid",
	});
}

export default Component;
