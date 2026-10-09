import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wznngcc3g.css';
import '../../css/t/tk3p5zjbs.css';
import '../../css/k/kko9x2bho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wznngcc3g"/><path class="tk3p5zjbs"/><path class="kko9x2bho"/>`,
		"fallback": "energy-icons:crew-transfer-vessel-48",
	});
}

export default Component;
