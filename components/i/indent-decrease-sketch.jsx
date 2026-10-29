import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fbg066znp.css';
import '../../css/f/fqjm84fig.css';
import '../../css/m/mp6us146y.css';
import '../../css/o/ogqgbeb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fbg066znp wm-k"/><path class="fqjm84fig wm-a"/><path class="mp6us146y wm-k"/><path class="ogqgbeb3t wm-a"/></g>`,
		"fallback": "withicons:indent-decrease-sketch",
	});
}

export default Component;
