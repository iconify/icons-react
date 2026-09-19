import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/aynunbbbe.css';
import '../../css/t/tep8knb1n.css';
import '../../css/h/hwnlojzbg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrz5kqu2M"><g class="aql7dnt-u"><path class="aynunbbbe"/><path class="tep8knb1n"/><path class="hwnlojzbg"/></g></mask></defs><path mask="url(#SVGrz5kqu2M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:doc-detail",
	});
}

export default Component;
