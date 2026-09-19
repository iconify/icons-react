import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/zpwt154-d.css';
import '../../css/y/yp7rfpwnl.css';
import '../../css/d/disxecbqq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPaR9ub9L"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="zpwt154-d"/><circle class="yp7rfpwnl"/><path class="disxecbqq"/></g></mask></defs><path mask="url(#SVGPaR9ub9L)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-staff",
	});
}

export default Component;
