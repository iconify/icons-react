import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd8bzbml.css';
import '../../css/w/wa67eqk3b.css';
import '../../css/l/lqdbwbc4f.css';
import '../../css/r/r-s7r2hkm.css';
import '../../css/k/kn13bqbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="wa67eqk3b"/><path class="lqdbwbc4f"/><path class="r-s7r2hkm"/><path class="kn13bqbya"/>`,
		"fallback": "solar:code-file-bold-duotone",
	});
}

export default Component;
