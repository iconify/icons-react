import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bco27yqdx.css';
import '../../css/q/qehbpfbew.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXfNetdbU"><g class="wwvp95byt"><path class="bco27yqdx"/><path class="qehbpfbew"/></g></mask></defs><path mask="url(#SVGXfNetdbU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:induction-lock",
	});
}

export default Component;
