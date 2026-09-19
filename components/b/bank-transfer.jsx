import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pz0kzybva.css';
import '../../css/j/juzlxjb7o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGwSbob2g"><g class="v3_i3wktz"><rect class="pz0kzybva"/><path class="juzlxjb7o"/></g></mask></defs><path mask="url(#SVGGwSbob2g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bank-transfer",
	});
}

export default Component;
