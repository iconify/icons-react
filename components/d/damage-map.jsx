import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l-ht24m0d.css';
import '../../css/r/rc8uiab2c.css';
import '../../css/b/b91i0on-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="l-ht24m0d"/><path class="rc8uiab2c"/><path clip-rule="evenodd" class="b91i0on-v"/></g>`,
		"fallback": "icon-park:damage-map",
	});
}

export default Component;
