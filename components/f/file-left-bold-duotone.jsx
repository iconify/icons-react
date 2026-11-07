import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd8bzbml.css';
import '../../css/q/qfm_mp96p.css';
import '../../css/c/cm457dbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="qfm_mp96p"/><path class="cm457dbhj"/>`,
		"fallback": "solar:file-left-bold-duotone",
	});
}

export default Component;
