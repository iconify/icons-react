import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtmxd4b4h.css';
import '../../css/r/rn2kcz5al.css';
import '../../css/l/lg6jjqbgi.css';
import '../../css/t/t74-6o1oe.css';
import '../../css/y/y4_fhtb_d.css';
import '../../css/k/kpxfszbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtmxd4b4h"/><circle class="rn2kcz5al"/><circle class="lg6jjqbgi"/><circle class="t74-6o1oe"/><circle class="y4_fhtb_d"/><path class="kpxfszbjo"/>`,
		"fallback": "eos-icons:cluster-role",
	});
}

export default Component;
