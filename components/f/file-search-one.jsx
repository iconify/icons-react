import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/y/ylefotw6e.css';
import '../../css/h/hlbprpbiu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu8Y0FYOt"><g class="rohhhzb0l"><path class="ftpkt8zyt"/><circle class="ylefotw6e"/><path class="hlbprpbiu"/></g></mask></defs><path mask="url(#SVGu8Y0FYOt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-search-one",
	});
}

export default Component;
