import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u3jzqgkfd.css';
import '../../css/a/ares4u2vu.css';
import '../../css/h/ht5kii6hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u3jzqgkfd"/><rect class="ares4u2vu"/><rect class="ht5kii6hd"/></g>`,
		"fallback": "lucide:cpu",
	});
}

export default Component;
