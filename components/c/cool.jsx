import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgepj_2fe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXyBFNeJE"><path class="jgepj_2fe"/></mask></defs><path mask="url(#SVGXyBFNeJE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cool",
	});
}

export default Component;
