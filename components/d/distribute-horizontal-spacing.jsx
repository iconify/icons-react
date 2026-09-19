import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/u/ughwv1b5j.css';
import '../../css/b/bl47i_h6l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEYElucub"><g class="hv130ab-t"><path class="ughwv1b5j"/><path class="bl47i_h6l"/></g></mask></defs><path mask="url(#SVGEYElucub)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:distribute-horizontal-spacing",
	});
}

export default Component;
