import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/v1s64tbtd.css';
import '../../css/t/t-44gy3jf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcbFV6bAw"><g class="v3_i3wktz"><path class="v1s64tbtd"/><path class="t-44gy3jf"/></g></mask></defs><path mask="url(#SVGcbFV6bAw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flip-vertically",
	});
}

export default Component;
