import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g6dwbdozf.css';
import '../../css/b/b33ifqbsd.css';
import '../../css/g/gtgxb9p8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGx0Jgvc0C"><g class="rohhhzb0l"><path class="g6dwbdozf"/><path class="b33ifqbsd"/><path class="gtgxb9p8u"/></g></mask></defs><path mask="url(#SVGx0Jgvc0C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chili",
	});
}

export default Component;
