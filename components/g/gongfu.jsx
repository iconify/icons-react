import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s3-qddb4s.css';
import '../../css/f/f62cqfb1v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ1mo6cLV"><g class="rohhhzb0l"><circle class="s3-qddb4s"/><path class="f62cqfb1v"/></g></mask></defs><path mask="url(#SVGZ1mo6cLV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gongfu",
	});
}

export default Component;
