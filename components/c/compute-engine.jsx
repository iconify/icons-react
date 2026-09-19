import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayfd0nbyv.css';
import '../../css/c/chwk06erx.css';
import '../../css/h/h0eeg0beg.css';
import '../../css/b/b1gjzcduw.css';
import '../../css/f/ft-lizwco.css';
import '../../css/c/cy6unzb5e.css';
import '../../css/w/wf11q2s4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayfd0nbyv"/><path class="chwk06erx"/><path class="h0eeg0beg"/><path class="b1gjzcduw"/><path class="ft-lizwco"/><path class="cy6unzb5e"/><path class="wf11q2s4b"/>`,
		"fallback": "gcp:compute-engine",
	});
}

export default Component;
