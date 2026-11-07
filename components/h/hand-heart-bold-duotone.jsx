import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzc-u03if.css';
import '../../css/a/a7qi5pmcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzc-u03if"/><path class="a7qi5pmcg"/>`,
		"fallback": "solar:hand-heart-bold-duotone",
	});
}

export default Component;
