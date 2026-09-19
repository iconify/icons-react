import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/z27nlieam.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxBqhEpJa"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="z27nlieam"/></g></mask></defs><path mask="url(#SVGxBqhEpJa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-failed",
	});
}

export default Component;
