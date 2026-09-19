import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/g/ghynpl_ct.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyEnuMdWt"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="ghynpl_ct"/></g></mask></defs><path mask="url(#SVGyEnuMdWt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-code",
	});
}

export default Component;
