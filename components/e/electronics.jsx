import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq0zzwbhy.css';
import '../../css/o/omdctlxyb.css';
import '../../css/u/uwk-mk2ws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq0zzwbhy"/><path class="omdctlxyb"/><path class="uwk-mk2ws"/>`,
		"fallback": "flat-color-icons:electronics",
	});
}

export default Component;
