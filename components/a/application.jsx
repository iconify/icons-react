import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rwpjs6wpq.css';
import '../../css/e/egakmtdxs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjgEFk5VV"><g class="v3_i3wktz"><path class="rwpjs6wpq"/><path class="egakmtdxs"/></g></mask></defs><path mask="url(#SVGjgEFk5VV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:application",
	});
}

export default Component;
