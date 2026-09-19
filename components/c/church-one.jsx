import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cslsnsbdo.css';
import '../../css/d/daj4drb4a.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/x/xy4oztbow.css';
import '../../css/t/tt3n4ibfb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0m6Redsh"><g class="rohhhzb0l"><path class="cslsnsbdo"/><path class="daj4drb4a"/><path class="j9hg1or3h"/><path class="xy4oztbow"/><path class="tt3n4ibfb"/></g></mask></defs><path mask="url(#SVG0m6Redsh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:church-one",
	});
}

export default Component;
