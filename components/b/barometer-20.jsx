import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/td2ls7bcf.css';
import '../../css/e/e8w13wbpk.css';
import '../../css/m/m9xus8rcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="td2ls7bcf"/><path class="e8w13wbpk"/><path class="m9xus8rcd"/>`,
		"fallback": "energy-icons:barometer-20",
	});
}

export default Component;
