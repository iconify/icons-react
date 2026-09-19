import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xzkp8w4-s.css';
import '../../css/q/qc6zml-vw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr1BG7bpF"><g class="v3_i3wktz"><path class="xzkp8w4-s"/><path class="qc6zml-vw"/></g></mask></defs><path mask="url(#SVGr1BG7bpF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:experiment-one",
	});
}

export default Component;
