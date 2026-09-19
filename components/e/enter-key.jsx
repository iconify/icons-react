import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xvheanbdf.css';
import '../../css/o/o7eettc6z.css';
import '../../css/e/e64091bwk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQe5MNbmL"><g class="wwvp95byt"><path class="xvheanbdf"/><path class="o7eettc6z"/><path class="e64091bwk"/></g></mask></defs><path mask="url(#SVGQe5MNbmL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:enter-key",
	});
}

export default Component;
