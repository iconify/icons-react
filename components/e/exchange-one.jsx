import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bco27yqdx.css';
import '../../css/i/i0qcow7ud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQkwBZpuH"><g class="wwvp95byt"><path class="bco27yqdx"/><path class="i0qcow7ud"/></g></mask></defs><path mask="url(#SVGQkwBZpuH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:exchange-one",
	});
}

export default Component;
