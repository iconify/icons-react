import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6cc17gdc.css';
import '../../css/q/q9hgeib1y.css';
import '../../css/d/dduq9elsr.css';
import '../../css/r/ryldpth7k.css';
import '../../css/p/poagl1bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6cc17gdc wm-k"/><path class="q9hgeib1y wm-a"/><path class="dduq9elsr wm-k"/><path class="ryldpth7k wm-k"/><path class="poagl1bqj wm-k"/>`,
		"fallback": "withicons-bauhaus:cooking-pot",
	});
}

export default Component;
