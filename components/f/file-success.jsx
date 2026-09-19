import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/y/ywt5xtc6b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfsP0WyOh"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="ywt5xtc6b"/></g></mask></defs><path mask="url(#SVGfsP0WyOh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-success",
	});
}

export default Component;
