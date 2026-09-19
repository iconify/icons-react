import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/zpwt154-d.css';
import '../../css/w/wyuzrqbuz.css';
import '../../css/q/qtcublb3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGizOVze8k"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="zpwt154-d"/><path class="wyuzrqbuz"/><path class="qtcublb3e"/></g></mask></defs><path mask="url(#SVGizOVze8k)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-lock",
	});
}

export default Component;
