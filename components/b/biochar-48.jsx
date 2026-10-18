import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa1bric-y.css';
import '../../css/s/s_f2_dbah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa1bric-y"/><path class="s_f2_dbah"/>`,
		"fallback": "energy-icons:biochar-48",
	});
}

export default Component;
