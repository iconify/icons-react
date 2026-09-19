import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9xvhi_ms.css';
import '../../css/k/klel7eb6s.css';
import '../../css/k/kbm6mcvob.css';
import '../../css/h/hdvqf-lhq.css';
import '../../css/u/umgviorqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9xvhi_ms"/><path class="klel7eb6s"/><path class="kbm6mcvob"/><path class="hdvqf-lhq"/><path class="umgviorqx"/>`,
		"fallback": "gcp:cloud-test-lab",
	});
}

export default Component;
