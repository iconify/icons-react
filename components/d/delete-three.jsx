import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/y/y3oe5tbyg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxMLkdchm"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="y3oe5tbyg"/></g></mask></defs><path mask="url(#SVGxMLkdchm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delete-three",
	});
}

export default Component;
