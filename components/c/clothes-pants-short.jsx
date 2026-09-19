import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y7hdjob7g.css';
import '../../css/e/ejjqbybko.css';
import '../../css/q/qgbesdgku.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGl9CYocit"><g class="wwvp95byt"><path class="y7hdjob7g"/><path class="ejjqbybko"/><path class="qgbesdgku"/></g></mask></defs><path mask="url(#SVGl9CYocit)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:clothes-pants-short",
	});
}

export default Component;
