import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tghaxetbg.css';
import '../../css/q/qoi2yua0n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqbqJgrTG"><g class="v3_i3wktz"><path class="tghaxetbg"/><path class="qoi2yua0n"/></g></mask></defs><path mask="url(#SVGqbqJgrTG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:graphic-design",
	});
}

export default Component;
