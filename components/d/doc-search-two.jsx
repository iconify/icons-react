import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0ebj98gu.css';
import '../../css/j/jlin40zen.css';
import '../../css/n/nglwwbzdo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiChrWclO"><g class="ft5dv1b6b"><path class="o0ebj98gu"/><path class="jlin40zen"/><path class="nglwwbzdo"/></g></mask></defs><path mask="url(#SVGiChrWclO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:doc-search-two",
	});
}

export default Component;
