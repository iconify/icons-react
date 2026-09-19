import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/h/hg2v1dbtb.css';
import '../../css/b/b0qk9-1ay.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRmu0Od8X"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="hg2v1dbtb"/><path class="b0qk9-1ay"/></g></mask></defs><path mask="url(#SVGRmu0Od8X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-withdrawal",
	});
}

export default Component;
