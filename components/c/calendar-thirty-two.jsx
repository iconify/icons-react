import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wwph4-thy.css';
import '../../css/q/qn_rm7nsa.css';
import '../../css/c/colb0kncr.css';
import '../../css/n/nj53t_b7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrzf06dUr"><g class="ufeehvblu"><path class="wwph4-thy"/><path clip-rule="evenodd" class="qn_rm7nsa"/><path class="colb0kncr"/><path class="nj53t_b7z"/></g></mask></defs><path mask="url(#SVGrzf06dUr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:calendar-thirty-two",
	});
}

export default Component;
