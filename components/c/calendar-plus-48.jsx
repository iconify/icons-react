import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxs8orj.css';
import '../../css/z/zejh6zddn.css';
import '../../css/i/iun1bib_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxs8orj"/><path class="zejh6zddn"/><path class="iun1bib_o"/>`,
		"fallback": "energy-icons:calendar-plus-48",
	});
}

export default Component;
