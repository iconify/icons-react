import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/u/uep8lf9wr.css';
import '../../css/h/h8jldv8sr.css';
import '../../css/e/enb5j67in.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="uep8lf9wr"/><path class="h8jldv8sr"/><path class="enb5j67in"/></g>`,
		"fallback": "icon-park:asterisk",
	});
}

export default Component;
