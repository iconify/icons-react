import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b-_fz9poa.css';
import '../../css/h/hzdbi7u3r.css';
import '../../css/m/m6ykc6jri.css';
import '../../css/j/jl5hqhb0s.css';
import '../../css/k/k5p26ybgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b-_fz9poa"/><path class="hzdbi7u3r"/><path class="m6ykc6jri"/><path class="jl5hqhb0s"/><path class="k5p26ybgq"/></g>`,
		"fallback": "streamline-ultimate:car-actions-check-1",
	});
}

export default Component;
