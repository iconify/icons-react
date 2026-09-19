import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bskpq5l9q.css';
import '../../css/y/yb7o6rkuj.css';
import '../../css/z/z6s97bcqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhoFsSbJb"><g class="wwvp95byt"><path class="bskpq5l9q"/><path class="yb7o6rkuj"/><path class="z6s97bcqn"/></g></mask></defs><path mask="url(#SVGhoFsSbJb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:enter-key-one",
	});
}

export default Component;
