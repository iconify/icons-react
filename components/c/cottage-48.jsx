import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o001ofuzg.css';
import '../../css/g/gv-7r_ppm.css';
import '../../css/p/pwrb__blp.css';
import '../../css/h/hefxuppcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o001ofuzg"/><path class="gv-7r_ppm"/><path class="pwrb__blp"/><path class="hefxuppcd"/>`,
		"fallback": "energy-icons:cottage-48",
	});
}

export default Component;
