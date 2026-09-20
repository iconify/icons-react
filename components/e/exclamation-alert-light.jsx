import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl82r-bam.css';
import '../../css/v/v9y5wi_ot.css';
import '../../css/q/q_ma8083f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl82r-bam"/><path class="v9y5wi_ot"/><path class="q_ma8083f"/>`,
		"fallback": "stash:exclamation-alert-light",
	});
}

export default Component;
