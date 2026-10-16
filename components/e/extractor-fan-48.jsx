import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5i9cpbbm.css';
import '../../css/c/cc-1-6bif.css';
import '../../css/n/nbl98olvj.css';
import '../../css/j/j5zi96b7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5i9cpbbm"/><path class="cc-1-6bif"/><path class="nbl98olvj"/><path class="j5zi96b7l"/>`,
		"fallback": "energy-icons:extractor-fan-48",
	});
}

export default Component;
