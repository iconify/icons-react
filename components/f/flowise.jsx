import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9ynxqbdc.css';
import '../../css/s/si8s1_bwz.css';
import '../../css/a/a6t8n_bir.css';
import '../../css/t/txm8t4b8e.css';
import '../../css/k/kpffwihmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9ynxqbdc"/><path class="si8s1_bwz"/><path class="a6t8n_bir"/><path class="txm8t4b8e"/><path class="kpffwihmr"/>`,
		"fallback": "selfhst:flowise",
	});
}

export default Component;
