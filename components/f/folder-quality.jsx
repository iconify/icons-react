import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/v/vz3o_bcvg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOXwmlczO"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="vz3o_bcvg"/></g></mask></defs><path mask="url(#SVGOXwmlczO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-quality",
	});
}

export default Component;
