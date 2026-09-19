import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u3garpbbu.css';
import '../../css/d/dl46ut6jf.css';
import '../../css/y/ycgeubb3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnJoKXcVm"><g class="rohhhzb0l"><path class="u3garpbbu"/><path clip-rule="evenodd" class="dl46ut6jf"/><path class="ycgeubb3k"/></g></mask></defs><path mask="url(#SVGnJoKXcVm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bottle",
	});
}

export default Component;
