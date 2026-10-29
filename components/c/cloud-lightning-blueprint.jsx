import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xx73ektwa.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/ly_xelbsc.css';
import '../../css/k/kjci_g4at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xx73ektwa"/><path class="cf3uzcrzx wm-deco"/><path class="ly_xelbsc wm-k"/><path class="kjci_g4at wm-a"/></g>`,
		"fallback": "withicons:cloud-lightning-blueprint",
	});
}

export default Component;
