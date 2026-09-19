import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftpedcbgb.css';
import '../../css/a/ai4ebubxr.css';
import '../../css/i/i3dab3_cs.css';
import '../../css/w/wfceq4bwa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftpedcbgb"/><path class="ai4ebubxr"/><path class="i3dab3_cs"/><path class="wfceq4bwa"/>`,
		"fallback": "devicon:chartjs",
	});
}

export default Component;
