import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/n/nn_is01mr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG34Z6HbZO"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="nn_is01mr"/></g></mask></defs><path mask="url(#SVG34Z6HbZO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-conversion",
	});
}

export default Component;
