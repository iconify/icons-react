import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqul4gkqk.css';
import '../../css/u/u7bozsa8i.css';
import '../../css/t/tkxry7wol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqul4gkqk"/><path class="u7bozsa8i"/><path class="tkxry7wol"/>`,
		"fallback": "energy-icons:flywheel-48",
	});
}

export default Component;
