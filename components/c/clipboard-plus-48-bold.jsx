import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u95e4sw8e.css';
import '../../css/l/lfn44k03n.css';
import '../../css/i/i_mq2ccik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u95e4sw8e"/><path class="lfn44k03n"/><path class="i_mq2ccik"/>`,
		"fallback": "energy-icons:clipboard-plus-48-bold",
	});
}

export default Component;
