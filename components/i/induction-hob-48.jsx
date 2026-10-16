import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsmhpgwcs.css';
import '../../css/d/dmi2w96im.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsmhpgwcs"/><path class="dmi2w96im"/>`,
		"fallback": "energy-icons:induction-hob-48",
	});
}

export default Component;
