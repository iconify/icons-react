import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/ds0w_ub0o.css';
import '../../css/k/kzhui5l3j.css';
import '../../css/a/ayzgaoqrs.css';
import '../../css/g/gkmfehj7b.css';
import '../../css/h/hp89i7bpq.css';
import '../../css/c/cteojybyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ds0w_ub0o"/><path class="kzhui5l3j"/><path class="ayzgaoqrs"/><path class="gkmfehj7b"/><path class="hp89i7bpq"/><path class="cteojybyy"/></g>`,
		"fallback": "icon-park:car-battery",
	});
}

export default Component;
