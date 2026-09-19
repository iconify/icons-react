import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/l/lacm7r0qo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD93INdFk"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="lacm7r0qo"/></g></mask></defs><path mask="url(#SVGD93INdFk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-hash",
	});
}

export default Component;
