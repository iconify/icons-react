import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq-3jutph.css';
import '../../css/t/t2dpk9bzd.css';
import '../../css/a/aqnz63b1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq-3jutph"/><path class="t2dpk9bzd"/><path class="aqnz63b1c"/>`,
		"fallback": "energy-icons:cooking-pot-48",
	});
}

export default Component;
