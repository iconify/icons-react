import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s_p8uqbpj.css';
import '../../css/h/hym_4ccwu.css';
import '../../css/k/kxoxc4wya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s_p8uqbpj"/><path class="hym_4ccwu"/><path class="kxoxc4wya"/></g>`,
		"fallback": "streamline-plump:convert-pdf-1",
	});
}

export default Component;
